
## An employee management SPA

#### Used technologies:

-   Frontend: Vue 3 with Vite, Vuex and Vue Router and Typescript
-   Backend: ASP.NET Core Web API 6
-   Database: Microsoft SQL Server Express 2019

#### Every employee has to have the following data:

-   Firstname - required
-   Lastname - required
-   Address - optional
-   Date of birth - required, date from the past
-   Date of starting work - required, current or future date
-   Position - required
-   Salary - required, decimal number

#### The SPA supports the following operations:

-   Show list of current employees
-   Show list of past employees
-   Show data of a selected employee (by clicking on its name)
-   Create a new employee entry
-   Delete an existing employee entry
-   Show list of current positions in the company
-   Create a new position
-   Delete an existing position

The SPA consists of three main views, one containing the list of current employees, one containing the list of past employees and one containing the list of current positions in the company.

All data regarding employees and positions is saved in an SQL database hosted in MS SQL Server.
