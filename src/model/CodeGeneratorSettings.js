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
    root.TalononeApi.CodeGeneratorSettings = factory(root.TalononeApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CodeGeneratorSettings model module.
   * @module model/CodeGeneratorSettings
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CodeGeneratorSettings</code>.
   * @alias module:model/CodeGeneratorSettings
   * @class
   * @param validCharacters {Array.<String>} Set of characters to be used when generating random part of code. Defaults to [A-Z, 0-9] (in terms of RegExp).
   * @param couponPattern {String} The pattern that will be used to generate coupon codes. The character `#` acts as a placeholder and will be replaced by a random character from the `validCharacters` set. 
   */
  var exports = function(validCharacters, couponPattern) {
    var _this = this;

    _this['validCharacters'] = validCharacters;
    _this['couponPattern'] = couponPattern;
  };

  /**
   * Constructs a <code>CodeGeneratorSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CodeGeneratorSettings} obj Optional instance to populate.
   * @return {module:model/CodeGeneratorSettings} The populated <code>CodeGeneratorSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('validCharacters')) {
        obj['validCharacters'] = ApiClient.convertToType(data['validCharacters'], ['String']);
      }
      if (data.hasOwnProperty('couponPattern')) {
        obj['couponPattern'] = ApiClient.convertToType(data['couponPattern'], 'String');
      }
    }
    return obj;
  }

  /**
   * Set of characters to be used when generating random part of code. Defaults to [A-Z, 0-9] (in terms of RegExp).
   * @member {Array.<String>} validCharacters
   */
  exports.prototype['validCharacters'] = undefined;
  /**
   * The pattern that will be used to generate coupon codes. The character `#` acts as a placeholder and will be replaced by a random character from the `validCharacters` set. 
   * @member {String} couponPattern
   */
  exports.prototype['couponPattern'] = undefined;



  return exports;
}));


