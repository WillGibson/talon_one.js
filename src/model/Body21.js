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
    root.TalononeApi.Body21 = factory(root.TalononeApi.ApiClient, root.TalononeApi.InlineResponse20023Params);
  }
}(this, function(ApiClient, InlineResponse20023Params) {
  'use strict';




  /**
   * The Body21 model module.
   * @module model/Body21
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Body21</code>.
   * 
   * @alias module:model/Body21
   * @class
   * @param id {Number} Unique ID for this entity.
   * @param created {Date} The exact moment this entity was created.
   * @param modified {Date} The exact moment this entity was last modified.
   * @param applicationIds {Array.<Number>} The IDs of the applications that are related to this entity. The IDs of the applications that are related to this entity.
   * @param title {String} Friendly title for this webhook
   * @param verb {module:model/Body21.VerbEnum} API method for this webhook
   * @param url {String} API url (supports templating using parameters) for this webhook
   * @param headers {Array.<String>} List of API HTTP headers for this webhook
   * @param params {Array.<module:model/InlineResponse20023Params>} Array of template argument definitions
   * @param enabled {Boolean} Enables or disables webhook from showing in rule builder
   * @param usedAt {Array.<String>} array of rulesets where webhook is used
   */
  var exports = function(id, created, modified, applicationIds, title, verb, url, headers, params, enabled, usedAt) {
    var _this = this;

    _this['id'] = id;
    _this['created'] = created;
    _this['modified'] = modified;
    _this['applicationIds'] = applicationIds;
    _this['title'] = title;
    _this['verb'] = verb;
    _this['url'] = url;
    _this['headers'] = headers;

    _this['params'] = params;
    _this['enabled'] = enabled;
    _this['usedAt'] = usedAt;
  };

  /**
   * Constructs a <code>Body21</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Body21} obj Optional instance to populate.
   * @return {module:model/Body21} The populated <code>Body21</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Date');
      }
      if (data.hasOwnProperty('modified')) {
        obj['modified'] = ApiClient.convertToType(data['modified'], 'Date');
      }
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
      if (data.hasOwnProperty('usedAt')) {
        obj['usedAt'] = ApiClient.convertToType(data['usedAt'], ['String']);
      }
    }
    return obj;
  }

  /**
   * Unique ID for this entity.
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The exact moment this entity was created.
   * @member {Date} created
   */
  exports.prototype['created'] = undefined;
  /**
   * The exact moment this entity was last modified.
   * @member {Date} modified
   */
  exports.prototype['modified'] = undefined;
  /**
   * The IDs of the applications that are related to this entity. The IDs of the applications that are related to this entity.
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
   * @member {module:model/Body21.VerbEnum} verb
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
   * array of rulesets where webhook is used
   * @member {Array.<String>} usedAt
   */
  exports.prototype['usedAt'] = undefined;


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


