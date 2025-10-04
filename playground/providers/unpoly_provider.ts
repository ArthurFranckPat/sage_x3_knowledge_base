import type { ApplicationService } from '@adonisjs/core/types'
import type { HttpContext } from '@adonisjs/core/http'

/**
 * Unpoly Service Provider
 * 
 * Provides Unpoly integration for AdonisJS applications:
 * - Request detection (X-Up-* headers)
 * - Response helpers for fragments
 * - Context helpers for Unpoly-specific features
 */
export default class UnpolyProvider {
  constructor(protected app: ApplicationService) {}

  /**
   * Register bindings to the container
   */
  register() {
    // Register Unpoly helper service
    this.app.container.singleton('unpoly', () => {
      return {
        /**
         * Check if request is from Unpoly
         */
        isUnpolyRequest(ctx: HttpContext): boolean {
          return ctx.request.header('X-Up-Version') !== undefined
        },

        /**
         * Get Unpoly target selector from request
         */
        getTarget(ctx: HttpContext): string | null {
          return ctx.request.header('X-Up-Target') || null
        },

        /**
         * Get Unpoly fail target selector from request
         */
        getFailTarget(ctx: HttpContext): string | null {
          return ctx.request.header('X-Up-Fail-Target') || null
        },

        /**
         * Check if request is for validation
         */
        isValidate(ctx: HttpContext): boolean {
          return ctx.request.header('X-Up-Validate') !== undefined
        },

        /**
         * Get Unpoly layer mode
         */
        getLayer(ctx: HttpContext): string | null {
          return ctx.request.header('X-Up-Mode') || null
        },

        /**
         * Set response to update specific target
         */
        setTarget(ctx: HttpContext, target: string) {
          ctx.response.header('X-Up-Target', target)
        },

        /**
         * Set response to close overlay
         */
        closeOverlay(ctx: HttpContext, value: string = 'true') {
          ctx.response.header('X-Up-Dismiss-Layer', value)
        },

        /**
         * Set response to emit event
         */
        emitEvent(ctx: HttpContext, event: string, data?: any) {
          const eventData = data ? JSON.stringify(data) : ''
          ctx.response.header('X-Up-Events', `${event} ${eventData}`)
        },

        /**
         * Set location to update browser URL
         */
        setLocation(ctx: HttpContext, url: string) {
          ctx.response.header('X-Up-Location', url)
        },
      }
    })
  }

  /**
   * The container bindings have booted
   */
  async boot() {}

  /**
   * The application has been booted
   */
  async start() {}

  /**
   * The process has been started
   */
  async ready() {}

  /**
   * Preparing to shutdown the app
   */
  async shutdown() {}
}
