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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.TalononeApi) {
      root.TalononeApi = {};
    }
    root.TalononeApi.InlineResponse2009Data = factory(root.TalononeApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InlineResponse2009Data model module.
   * @module model/InlineResponse2009Data
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>InlineResponse2009Data</code>.
   * 
   * @alias module:model/InlineResponse2009Data
   * @class
   * @param name {String} The name of this application.
   * @param policy {Object.<String, Array.<String>>} A map of access privileges.
   * @param id {Number} Unique ID for this entity.
   * @param created {Date} The exact moment this entity was created.
   * @param modified {Date} The exact moment this entity was last modified.
   * @param accountId {Number} The ID of the account that owns this entity.
   */
  var exports = function(name, policy, id, created, modified, accountId) {
    var _this = this;

    _this['name'] = name;
    _this['policy'] = policy;
    _this['id'] = id;
    _this['created'] = created;
    _this['modified'] = modified;
    _this['accountId'] = accountId;
  };

  /**
   * Constructs a <code>InlineResponse2009Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2009Data} obj Optional instance to populate.
   * @return {module:model/InlineResponse2009Data} The populated <code>InlineResponse2009Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('policy')) {
        obj['policy'] = ApiClient.convertToType(data['policy'], {'String': ['String']});
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Date');
      }
      if (data.hasOwnProperty('modified')) {
        obj['modified'] = ApiClient.convertToType(data['modified'], 'Date');
      }
      if (data.hasOwnProperty('accountId')) {
        obj['accountId'] = ApiClient.convertToType(data['accountId'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The name of this application.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * A map of access privileges.
   * @member {Object.<String, Array.<String>>} policy
   */
  exports.prototype['policy'] = undefined;
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
   * The ID of the account that owns this entity.
   * @member {Number} accountId
   */
  exports.prototype['accountId'] = undefined;



  return exports;
}));


