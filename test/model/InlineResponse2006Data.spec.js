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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TalononeApi);
  }
}(this, function(expect, TalononeApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TalononeApi.InlineResponse2006Data();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InlineResponse2006Data', function() {
    it('should create an instance of InlineResponse2006Data', function() {
      // uncomment below and update the code to test InlineResponse2006Data
      //var instane = new TalononeApi.InlineResponse2006Data();
      //expect(instance).to.be.a(TalononeApi.InlineResponse2006Data);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new TalononeApi.InlineResponse2006Data();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instane = new TalononeApi.InlineResponse2006Data();
      //expect(instance).to.be();
    });

    it('should have the property campaignId (base name: "campaignId")', function() {
      // uncomment below and update the code to test the property campaignId
      //var instane = new TalononeApi.InlineResponse2006Data();
      //expect(instance).to.be();
    });

    it('should have the property advocateProfileIntegrationId (base name: "advocateProfileIntegrationId")', function() {
      // uncomment below and update the code to test the property advocateProfileIntegrationId
      //var instane = new TalononeApi.InlineResponse2006Data();
      //expect(instance).to.be();
    });

    it('should have the property friendProfileIntegrationId (base name: "friendProfileIntegrationId")', function() {
      // uncomment below and update the code to test the property friendProfileIntegrationId
      //var instane = new TalononeApi.InlineResponse2006Data();
      //expect(instance).to.be();
    });

    it('should have the property startDate (base name: "startDate")', function() {
      // uncomment below and update the code to test the property startDate
      //var instane = new TalononeApi.InlineResponse2006Data();
      //expect(instance).to.be();
    });

    it('should have the property expiryDate (base name: "expiryDate")', function() {
      // uncomment below and update the code to test the property expiryDate
      //var instane = new TalononeApi.InlineResponse2006Data();
      //expect(instance).to.be();
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instane = new TalononeApi.InlineResponse2006Data();
      //expect(instance).to.be();
    });

    it('should have the property usageCounter (base name: "usageCounter")', function() {
      // uncomment below and update the code to test the property usageCounter
      //var instane = new TalononeApi.InlineResponse2006Data();
      //expect(instance).to.be();
    });

    it('should have the property usageLimit (base name: "usageLimit")', function() {
      // uncomment below and update the code to test the property usageLimit
      //var instane = new TalononeApi.InlineResponse2006Data();
      //expect(instance).to.be();
    });

  });

}));