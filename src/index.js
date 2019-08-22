/*
 * moleculer-opentracing
 * Copyright (c) 2019 YourSoft.run (https://github.com/YourSoftRun/moleculer-opentracing)
 * MIT Licensed
 */

'use strict'

const { Tags } = require('opentracing')

module.exports = tracer => ({
  created() {
    this.spans = {}
  },
  events: {

    /**
     * Metric event start span
     *
     * @param {Object} payload
     */
    'metrics.trace.span.start' ({ id, parentID, nodeID, callerNodeID, level, remoteCall, name, service, action, startTime, params, meta }) {
      this.spans[id] = tracer.startSpan(name || action.name, {
        startTime,
        childOf: parentID ? this.spans[parentID] : undefined,
        tags: {
          nodeID, callerNodeID, level, remoteCall, params, meta,
          service: this.getServiceName(service, action),
          action: action ? action.name : undefined,
          [Tags.SPAN_KIND]: Tags.SPAN_KIND_RPC_SERVER
        }
      })
    },

    /**
     * Metric event end span
     *
     * @param {Object} payload
     */
    'metrics.trace.span.finish' ({ id, endTime, error }) {
      const span = this.spans[id]
      if (span) {
        if (error) {
          span.addTags({ [Tags.ERROR]: true, error })
        }
        span.finish(endTime)
        delete this.spans[id]
      }
    }
  },

  methods: {

    /**
		 * Get service name from metric event
		 *
		 * @param {Object} metric
		 * @returns {String}
		 */
    getServiceName(service, action) {
      if (!service && action) {
        const parts = action.name.split('.')
        parts.pop()
        return parts.join('.')
      }
      return service && service.name ? service.name : service
    }
  }
})
