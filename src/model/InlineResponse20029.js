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
    root.TalononeApi.InlineResponse20029 = factory(root.TalononeApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InlineResponse20029 model module.
   * @module model/InlineResponse20029
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>InlineResponse20029</code>.
   * 
   * @alias module:model/InlineResponse20029
   * @class
   * @param id {Number} Unique ID for this entity.
   * @param created {Date} The exact moment this entity was created.
   * @param modified {Date} The exact moment this entity was last modified.
   * @param companyName {String} 
   * @param domainName {String} Subdomain Name for yourcompany.talon.one
   * @param state {module:model/InlineResponse20029.StateEnum} State of the account (trial, active, trial_expired)
   * @param billingEmail {String} The billing email address associated with your company account.
   */
  var exports = function(id, created, modified, companyName, domainName, state, billingEmail) {
    var _this = this;

    _this['id'] = id;
    _this['created'] = created;
    _this['modified'] = modified;
    _this['companyName'] = companyName;
    _this['domainName'] = domainName;
    _this['state'] = state;
    _this['billingEmail'] = billingEmail;










  };

  /**
   * Constructs a <code>InlineResponse20029</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20029} obj Optional instance to populate.
   * @return {module:model/InlineResponse20029} The populated <code>InlineResponse20029</code> instance.
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
      if (data.hasOwnProperty('companyName')) {
        obj['companyName'] = ApiClient.convertToType(data['companyName'], 'String');
      }
      if (data.hasOwnProperty('domainName')) {
        obj['domainName'] = ApiClient.convertToType(data['domainName'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('billingEmail')) {
        obj['billingEmail'] = ApiClient.convertToType(data['billingEmail'], 'String');
      }
      if (data.hasOwnProperty('planName')) {
        obj['planName'] = ApiClient.convertToType(data['planName'], 'String');
      }
      if (data.hasOwnProperty('planExpires')) {
        obj['planExpires'] = ApiClient.convertToType(data['planExpires'], 'Date');
      }
      if (data.hasOwnProperty('applicationLimit')) {
        obj['applicationLimit'] = ApiClient.convertToType(data['applicationLimit'], 'Number');
      }
      if (data.hasOwnProperty('userLimit')) {
        obj['userLimit'] = ApiClient.convertToType(data['userLimit'], 'Number');
      }
      if (data.hasOwnProperty('campaignLimit')) {
        obj['campaignLimit'] = ApiClient.convertToType(data['campaignLimit'], 'Number');
      }
      if (data.hasOwnProperty('apiLimit')) {
        obj['apiLimit'] = ApiClient.convertToType(data['apiLimit'], 'Number');
      }
      if (data.hasOwnProperty('applicationCount')) {
        obj['applicationCount'] = ApiClient.convertToType(data['applicationCount'], 'Number');
      }
      if (data.hasOwnProperty('userCount')) {
        obj['userCount'] = ApiClient.convertToType(data['userCount'], 'Number');
      }
      if (data.hasOwnProperty('campaignsActiveCount')) {
        obj['campaignsActiveCount'] = ApiClient.convertToType(data['campaignsActiveCount'], 'Number');
      }
      if (data.hasOwnProperty('campaignsInactiveCount')) {
        obj['campaignsInactiveCount'] = ApiClient.convertToType(data['campaignsInactiveCount'], 'Number');
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
   * @member {String} companyName
   */
  exports.prototype['companyName'] = undefined;
  /**
   * Subdomain Name for yourcompany.talon.one
   * @member {String} domainName
   */
  exports.prototype['domainName'] = undefined;
  /**
   * State of the account (trial, active, trial_expired)
   * @member {module:model/InlineResponse20029.StateEnum} state
   */
  exports.prototype['state'] = undefined;
  /**
   * The billing email address associated with your company account.
   * @member {String} billingEmail
   */
  exports.prototype['billingEmail'] = undefined;
  /**
   * The name of your booked plan.
   * @member {String} planName
   */
  exports.prototype['planName'] = undefined;
  /**
   * The point in time at which your current plan expires.
   * @member {Date} planExpires
   */
  exports.prototype['planExpires'] = undefined;
  /**
   * The maximum number of Applications covered by your plan.
   * @member {Number} applicationLimit
   */
  exports.prototype['applicationLimit'] = undefined;
  /**
   * The maximum number of Campaign Manager Users covered by your plan.
   * @member {Number} userLimit
   */
  exports.prototype['userLimit'] = undefined;
  /**
   * The maximum number of Campaigns covered by your plan.
   * @member {Number} campaignLimit
   */
  exports.prototype['campaignLimit'] = undefined;
  /**
   * The maximum number of Integration API calls covered by your plan per billing period.
   * @member {Number} apiLimit
   */
  exports.prototype['apiLimit'] = undefined;
  /**
   * The current number of Applications in your account.
   * @member {Number} applicationCount
   */
  exports.prototype['applicationCount'] = undefined;
  /**
   * The current number of Campaign Manager Users in your account.
   * @member {Number} userCount
   */
  exports.prototype['userCount'] = undefined;
  /**
   * The current number of active Campaigns in your account.
   * @member {Number} campaignsActiveCount
   */
  exports.prototype['campaignsActiveCount'] = undefined;
  /**
   * The current number of inactive Campaigns in your account.
   * @member {Number} campaignsInactiveCount
   */
  exports.prototype['campaignsInactiveCount'] = undefined;


  /**
   * Allowed values for the <code>state</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StateEnum = {
    /**
     * value: "trial"
     * @const
     */
    "trial": "trial",
    /**
     * value: "active"
     * @const
     */
    "active": "active",
    /**
     * value: "trial_expired"
     * @const
     */
    "trial_expired": "trial_expired"  };


  return exports;
}));


