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
    instance = new TalononeApi.InlineResponse20022();
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

  describe('InlineResponse20022', function() {
    it('should create an instance of InlineResponse20022', function() {
      // uncomment below and update the code to test InlineResponse20022
      //var instane = new TalononeApi.InlineResponse20022();
      //expect(instance).to.be.a(TalononeApi.InlineResponse20022);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new TalononeApi.InlineResponse20022();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instane = new TalononeApi.InlineResponse20022();
      //expect(instance).to.be();
    });

    it('should have the property modified (base name: "modified")', function() {
      // uncomment below and update the code to test the property modified
      //var instane = new TalononeApi.InlineResponse20022();
      //expect(instance).to.be();
    });

    it('should have the property accountId (base name: "accountId")', function() {
      // uncomment below and update the code to test the property accountId
      //var instane = new TalononeApi.InlineResponse20022();
      //expect(instance).to.be();
    });

    it('should have the property entity (base name: "entity")', function() {
      // uncomment below and update the code to test the property entity
      //var instane = new TalononeApi.InlineResponse20022();
      //expect(instance).to.be();
    });

    it('should have the property eventType (base name: "eventType")', function() {
      // uncomment below and update the code to test the property eventType
      //var instane = new TalononeApi.InlineResponse20022();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new TalononeApi.InlineResponse20022();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new TalononeApi.InlineResponse20022();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new TalononeApi.InlineResponse20022();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new TalononeApi.InlineResponse20022();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instane = new TalononeApi.InlineResponse20022();
      //expect(instance).to.be();
    });

    it('should have the property suggestions (base name: "suggestions")', function() {
      // uncomment below and update the code to test the property suggestions
      //var instane = new TalononeApi.InlineResponse20022();
      //expect(instance).to.be();
    });

    it('should have the property editable (base name: "editable")', function() {
      // uncomment below and update the code to test the property editable
      //var instane = new TalononeApi.InlineResponse20022();
      //expect(instance).to.be();
    });

    it('should have the property locked (base name: "locked")', function() {
      // uncomment below and update the code to test the property locked
      //var instane = new TalononeApi.InlineResponse20022();
      //expect(instance).to.be();
    });

    it('should have the property lastUsed (base name: "lastUsed")', function() {
      // uncomment below and update the code to test the property lastUsed
      //var instane = new TalononeApi.InlineResponse20022();
      //expect(instance).to.be();
    });

    it('should have the property lastUsedRequestUuid (base name: "lastUsedRequestUuid")', function() {
      // uncomment below and update the code to test the property lastUsedRequestUuid
      //var instane = new TalononeApi.InlineResponse20022();
      //expect(instance).to.be();
    });

    it('should have the property lastUsedApplicationId (base name: "lastUsedApplicationId")', function() {
      // uncomment below and update the code to test the property lastUsedApplicationId
      //var instane = new TalononeApi.InlineResponse20022();
      //expect(instance).to.be();
    });

    it('should have the property usedAt (base name: "usedAt")', function() {
      // uncomment below and update the code to test the property usedAt
      //var instane = new TalononeApi.InlineResponse20022();
      //expect(instance).to.be();
    });

  });

}));