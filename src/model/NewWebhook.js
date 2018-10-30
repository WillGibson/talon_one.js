/**
 * Talon.One API
 * The Talon.One API is used to manage applications and campaigns, as well as to integrate with your application. The operations in the _Integration API_ section are used to integrate with our platform, while the other operations are used to manage applications and campaigns.  ### Where is the API?  The API is available at the same hostname as these docs. For example, if you are reading this page at `https://mycompany.talon.one/docs/api/`, the URL for the [updateCustomerProfile][] operation is `https://mycompany.talon.one/v1/customer_profiles/id`  [updateCustomerProfile]: #operation--v1-customer_profiles--integrationId--put 
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/InlineResponse20023Params'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse20023Params'));
  } else {
    // Browser globals (root is window)
    if (!root.TalononeApi) {
      root.TalononeApi = {};
    }
    root.TalononeApi.NewWebhook = factory(root.TalononeApi.ApiClient, root.TalononeApi.InlineResponse20023Params);
  }
}(this, function(ApiClient, InlineResponse20023Params) {
  'use strict';




  /**
   * The NewWebhook model module.
   * @module model/NewWebhook
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>NewWebhook</code>.
   * 
   * @alias module:model/NewWebhook
   * @class
   * @param applicationIds {Array.<Number>} The IDs of the applications that are related to this entity.
   * @param title {String} Friendly title for this webhook
   * @param verb {module:model/NewWebhook.VerbEnum} API method for this webhook
   * @param url {String} API url (supports templating using parameters) for this webhook
   * @param headers {Array.<String>} List of API HTTP headers for this webhook
   * @param params {Array.<module:model/InlineResponse20023Params>} Array of template argument definitions
   * @param enabled {Boolean} Enables or disables webhook from showing in rule builder
   */
  var exports = function(applicationIds, title, verb, url, headers, params, enabled) {
    var _this = this;

    _this['applicationIds'] = applicationIds;
    _this['title'] = title;
    _this['verb'] = verb;
    _this['url'] = url;
    _this['headers'] = headers;

    _this['params'] = params;
    _this['enabled'] = enabled;
  };

  /**
   * Constructs a <code>NewWebhook</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NewWebhook} obj Optional instance to populate.
   * @return {module:model/NewWebhook} The populated <code>NewWebhook</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('applicationIds')) {
        obj['applicationIds'] = ApiClient.convertToType(data['applicationIds'], ['Number']);
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('verb')) {
        obj['verb'] = ApiClient.convertToType(data['verb'], 'String');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('headers')) {
        obj['headers'] = ApiClient.convertToType(data['headers'], ['String']);
      }
      if (data.hasOwnProperty('payload')) {
        obj['payload'] = ApiClient.convertToType(data['payload'], 'String');
      }
      if (data.hasOwnProperty('params')) {
        obj['params'] = ApiClient.convertToType(data['params'], [InlineResponse20023Params]);
      }
      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * The IDs of the applications that are related to this entity.
   * @member {Array.<Number>} applicationIds
   */
  exports.prototype['applicationIds'] = undefined;
  /**
   * Friendly title for this webhook
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * API method for this webhook
   * @member {module:model/NewWebhook.VerbEnum} verb
   */
  exports.prototype['verb'] = undefined;
  /**
   * API url (supports templating using parameters) for this webhook
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * List of API HTTP headers for this webhook
   * @member {Array.<String>} headers
   */
  exports.prototype['headers'] = undefined;
  /**
   * API payload (supports templating using parameters) for this webhook
   * @member {String} payload
   */
  exports.prototype['payload'] = undefined;
  /**
   * Array of template argument definitions
   * @member {Array.<module:model/InlineResponse20023Params>} params
   */
  exports.prototype['params'] = undefined;
  /**
   * Enables or disables webhook from showing in rule builder
   * @member {Boolean} enabled
   */
  exports.prototype['enabled'] = undefined;


  /**
   * Allowed values for the <code>verb</code> property.
   * @enum {String}
   * @readonly
   */
  exports.VerbEnum = {
    /**
     * value: "POST"
     * @const
     */
    "POST": "POST",
    /**
     * value: "PUT"
     * @const
     */
    "PUT": "PUT",
    /**
     * value: "GET"
     * @const
     */
    "GET": "GET",
    /**
     * value: "DELETE"
     * @const
     */
    "DELETE": "DELETE",
    /**
     * value: "PATCH"
     * @const
     */
    "PATCH": "PATCH"  };


  return exports;
}));

