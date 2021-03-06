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
    define(['ApiClient', 'model/InlineResponse2001CouponSettings', 'model/InlineResponse2001Limits'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse2001CouponSettings'), require('./InlineResponse2001Limits'));
  } else {
    // Browser globals (root is window)
    if (!root.TalononeApi) {
      root.TalononeApi = {};
    }
    root.TalononeApi.InlineResponse2001Data = factory(root.TalononeApi.ApiClient, root.TalononeApi.InlineResponse2001CouponSettings, root.TalononeApi.InlineResponse2001Limits);
  }
}(this, function(ApiClient, InlineResponse2001CouponSettings, InlineResponse2001Limits) {
  'use strict';




  /**
   * The InlineResponse2001Data model module.
   * @module model/InlineResponse2001Data
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>InlineResponse2001Data</code>.
   * 
   * @alias module:model/InlineResponse2001Data
   * @class
   * @param id {Number} This campaign's ID. Unique ID for this entity.
   * @param created {Date} The exact moment this entity was created.
   * @param applicationId {Number} The ID of the application that owns this entity.
   * @param userId {Number} The ID of the account that owns this entity.
   * @param name {String} A friendly name for this campaign.
   * @param description {String} A detailed description of the campaign.
   * @param state {module:model/InlineResponse2001Data.StateEnum} A disabled or archived campaign is not evaluated for rules or coupons. 
   * @param tags {Array.<String>} A list of tags for the campaign.
   * @param features {Array.<module:model/InlineResponse2001Data.FeaturesEnum>} A list of features for the campaign.
   * @param limits {Array.<module:model/InlineResponse2001Limits>} The set of limits that will operate for this campaign
   */
  var exports = function(id, created, applicationId, userId, name, description, state, tags, features, limits) {
    var _this = this;

    _this['id'] = id;
    _this['created'] = created;
    _this['applicationId'] = applicationId;
    _this['userId'] = userId;
    _this['name'] = name;
    _this['description'] = description;



    _this['state'] = state;

    _this['tags'] = tags;
    _this['features'] = features;


    _this['limits'] = limits;







  };

  /**
   * Constructs a <code>InlineResponse2001Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2001Data} obj Optional instance to populate.
   * @return {module:model/InlineResponse2001Data} The populated <code>InlineResponse2001Data</code> instance.
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
      if (data.hasOwnProperty('applicationId')) {
        obj['applicationId'] = ApiClient.convertToType(data['applicationId'], 'Number');
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('startTime')) {
        obj['startTime'] = ApiClient.convertToType(data['startTime'], 'Date');
      }
      if (data.hasOwnProperty('endTime')) {
        obj['endTime'] = ApiClient.convertToType(data['endTime'], 'Date');
      }
      if (data.hasOwnProperty('attributes')) {
        obj['attributes'] = ApiClient.convertToType(data['attributes'], Object);
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('activeRulesetId')) {
        obj['activeRulesetId'] = ApiClient.convertToType(data['activeRulesetId'], 'Number');
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
      if (data.hasOwnProperty('features')) {
        obj['features'] = ApiClient.convertToType(data['features'], ['String']);
      }
      if (data.hasOwnProperty('couponSettings')) {
        obj['couponSettings'] = InlineResponse2001CouponSettings.constructFromObject(data['couponSettings']);
      }
      if (data.hasOwnProperty('referralSettings')) {
        obj['referralSettings'] = InlineResponse2001CouponSettings.constructFromObject(data['referralSettings']);
      }
      if (data.hasOwnProperty('limits')) {
        obj['limits'] = ApiClient.convertToType(data['limits'], [InlineResponse2001Limits]);
      }
      if (data.hasOwnProperty('couponRedemptionCount')) {
        obj['couponRedemptionCount'] = ApiClient.convertToType(data['couponRedemptionCount'], 'Number');
      }
      if (data.hasOwnProperty('referralRedemptionCount')) {
        obj['referralRedemptionCount'] = ApiClient.convertToType(data['referralRedemptionCount'], 'Number');
      }
      if (data.hasOwnProperty('discountCount')) {
        obj['discountCount'] = ApiClient.convertToType(data['discountCount'], 'Number');
      }
      if (data.hasOwnProperty('lastActivity')) {
        obj['lastActivity'] = ApiClient.convertToType(data['lastActivity'], 'Date');
      }
      if (data.hasOwnProperty('updated')) {
        obj['updated'] = ApiClient.convertToType(data['updated'], 'Date');
      }
      if (data.hasOwnProperty('createdBy')) {
        obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'String');
      }
      if (data.hasOwnProperty('updatedBy')) {
        obj['updatedBy'] = ApiClient.convertToType(data['updatedBy'], 'String');
      }
    }
    return obj;
  }

  /**
   * This campaign's ID. Unique ID for this entity.
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The exact moment this entity was created.
   * @member {Date} created
   */
  exports.prototype['created'] = undefined;
  /**
   * The ID of the application that owns this entity.
   * @member {Number} applicationId
   */
  exports.prototype['applicationId'] = undefined;
  /**
   * The ID of the account that owns this entity.
   * @member {Number} userId
   */
  exports.prototype['userId'] = undefined;
  /**
   * A friendly name for this campaign.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * A detailed description of the campaign.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Datetime when the campaign will become active.
   * @member {Date} startTime
   */
  exports.prototype['startTime'] = undefined;
  /**
   * Datetime when the campaign will become in-active.
   * @member {Date} endTime
   */
  exports.prototype['endTime'] = undefined;
  /**
   * Arbitrary properties associated with this campaign
   * @member {Object} attributes
   */
  exports.prototype['attributes'] = undefined;
  /**
   * A disabled or archived campaign is not evaluated for rules or coupons. 
   * @member {module:model/InlineResponse2001Data.StateEnum} state
   * @default 'enabled'
   */
  exports.prototype['state'] = 'enabled';
  /**
   * ID of Ruleset this campaign applies on customer session evaluation.
   * @member {Number} activeRulesetId
   */
  exports.prototype['activeRulesetId'] = undefined;
  /**
   * A list of tags for the campaign.
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * A list of features for the campaign.
   * @member {Array.<module:model/InlineResponse2001Data.FeaturesEnum>} features
   */
  exports.prototype['features'] = undefined;
  /**
   * @member {module:model/InlineResponse2001CouponSettings} couponSettings
   */
  exports.prototype['couponSettings'] = undefined;
  /**
   * @member {module:model/InlineResponse2001CouponSettings} referralSettings
   */
  exports.prototype['referralSettings'] = undefined;
  /**
   * The set of limits that will operate for this campaign
   * @member {Array.<module:model/InlineResponse2001Limits>} limits
   */
  exports.prototype['limits'] = undefined;
  /**
   * Number of coupons redeemed in the campaign.
   * @member {Number} couponRedemptionCount
   */
  exports.prototype['couponRedemptionCount'] = undefined;
  /**
   * Number of referral codes redeemed in the campaign.
   * @member {Number} referralRedemptionCount
   */
  exports.prototype['referralRedemptionCount'] = undefined;
  /**
   * Total amount of discounts redeemed in the campaign.
   * @member {Number} discountCount
   */
  exports.prototype['discountCount'] = undefined;
  /**
   * Timestamp of the most recent event received by this campaign.
   * @member {Date} lastActivity
   */
  exports.prototype['lastActivity'] = undefined;
  /**
   * Timestamp of the most recent update to the campaign or any of its elements.
   * @member {Date} updated
   */
  exports.prototype['updated'] = undefined;
  /**
   * Name of the user who created this campaign if available.
   * @member {String} createdBy
   */
  exports.prototype['createdBy'] = undefined;
  /**
   * Name of the user who last updated this campaign if available.
   * @member {String} updatedBy
   */
  exports.prototype['updatedBy'] = undefined;


  /**
   * Allowed values for the <code>state</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StateEnum = {
    /**
     * value: "enabled"
     * @const
     */
    "enabled": "enabled",
    /**
     * value: "disabled"
     * @const
     */
    "disabled": "disabled",
    /**
     * value: "archived"
     * @const
     */
    "archived": "archived"  };

  /**
   * Allowed values for the <code>features</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FeaturesEnum = {
    /**
     * value: "coupons"
     * @const
     */
    "coupons": "coupons",
    /**
     * value: "referrals"
     * @const
     */
    "referrals": "referrals",
    /**
     * value: "loyalty"
     * @const
     */
    "loyalty": "loyalty"  };


  return exports;
}));


