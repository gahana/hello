Feature: A lonely developer can get a hello message from this API

Scenario: Hello API call should send a good response
    When I GET /v1/hello
    Then response code should be 200

Scenario: Hello API call should send Hello World! in response
    When I GET /v1/hello
    Then response body should contain Hello World!
