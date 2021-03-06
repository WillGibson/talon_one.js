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
    root.TalononeApi.Body17 = factory(root.TalononeApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Body17 model module.
   * @module model/Body17
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Body17</code>.
   * @alias module:model/Body17
   * @class
   * @param name {String} The name of this application.
   * @param policy {Object.<String, Array.<String>>} A map of access privileges.
   */
  var exports = function(name, policy) {
    var _this = this;

    _this['name'] = name;
    _this['policy'] = policy;
  };

  /**
   * Constructs a <code>Body17</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Body17} obj Optional instance to populate.
   * @return {module:model/Body17} The populated <code>Body17</code> instance.
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



  return exports;
}));


