Feature: Call Apis

    Call apis which create, edit and delete the user account

    Scenario: Get user from DB
        Given I call api with url 'http://localhost:3000/get-user/61de899eaf90a6f36adab732'
        When Response has HTTP code '200'
        Then Response should contain the following attributes 'name, city, gender, age'



# name| city| gender| age|
# Oliver| Bratislava| male| 28|