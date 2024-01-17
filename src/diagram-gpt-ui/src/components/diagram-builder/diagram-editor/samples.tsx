import { Button } from "@mui/material";
import {
  DiagramType,
  MermaidDiagramTypes,
  PlantUmlDiagramTypes,
} from "../models/diagram-types";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

import "./samples.scss";
import { DiagramProvider } from "../../../models/diagram-provider";

type SamplesProps = {
  diagramProvider: DiagramProvider;
  onSampleSelected: (diagramType: DiagramType, requirement: string) => void;
};

export function Samples({ diagramProvider, onSampleSelected }: SamplesProps) {
  const items = [
    {
      title: "Schedule an appointment",
      requirement: `
There are the following requirements for the scheduling appointment flow:
  - The examinee schedules an appointment by calling the Appointment Service.
  - The Appointment Service reserves the time slot and creates a bill by executing the Payments Service.
  - Appointment creation should be audited through the Audit Service.
  - Once the appointment is created, a confirmation page is displayed back to the examinee.
  - Within the next 30 minutes, the examinee should pay the bill using their payment system of choice and confirm the payment on the confirmation page.
  - Once the confirmation is received, Appointment Service should book the reserved time slot and verify payment.
  - The confirmation should also be properly audited.
  - Once the confirmation is completed, the Appointment Service should send an email to the examinee with exam details through the Notifications Service.
      `,
      supportedDiagrams: [
        {
          diagramProvider: DiagramProvider.Mermaid,
          diagramType: MermaidDiagramTypes.SEQUENCE_DIAGRAM,
        },
        {
          diagramProvider: DiagramProvider.PlantUML,
          diagramType: PlantUmlDiagramTypes.SEQUENCE_DIAGRAM,
        },
      ],
    },
    {
      title: "Release Calendar",
      requirement: `
Release Calendar:

1. 2014-01-06: Code Freeze completed.
2. 2014-01-06 to 2014-01-08: Work on penetration testing tasks.
3. 2014-01-09: Begin performance testing (Will take 3 days).
4. Immediately after completion of Performance Testing, begin User Acceptance Testing (UAT) (5 days needed).
5. Immediately after UAT Testing, commence bug fixing (5 days needed).
6. Simultaneously starting from 2014-01-06: Tasks in the 'Critical Tasks' section begin, starting with completion of a critical hot fix.
7. After the hot fix, begin Dynamic Application Security Testing (DAST) (2 days needed).
8. Create tests for DAST (duration: 3 days).
9. Work on critical hot fix (5 days), create tests for Static Application Security Testing (SAST) (2 days), add functionalities to software (1 day).
10. 2014-01-25: Milestone - Major functionality added to the software.
11. Simultaneously with critical tasks, begin documentation of software functionalities (Takes three days).
12. After documentation: Add the UI/UX design to demo page (20 hrs), then add performance report to demo page (48 hrs).
13. Under 'Last Phase', perform a final round of bug fixing after completing the last documentation task. Followed by UI/UX design update and Performance report update to the demo page.
(Note: Weekends are excluded from the dates)
      `,
      supportedDiagrams: [
        {
          diagramProvider: DiagramProvider.Mermaid,
          diagramType: MermaidDiagramTypes.GANTT_DIAGRAM,
        },
      ],
    },
    {
      title: "Python learning path",
      requirement: `
Becoming a Python backend developer is a journey that involves learning a variety of skills related to server-side development. Here's a short list of the learning path for aspiring Python backend developers:

1. Basic Python Knowledge:
   - Syntax and Semantics
   - Data Structures (Lists, Tuples, Sets, Dictionaries)
   - Control Flow (If statements, Loops)
   - Functions and Modules
   - Exception Handling
   - Object-Oriented Programming

2. Advanced Python Concepts:
   - Iterators and Generators
   - Decorators
   - Context Managers
   - Threading and Multiprocessing
   - Asynchronous Programming (asyncio)

3. Web Frameworks:
   - Flask (lightweight, modular)
   - Django (full-stack, batteries-included)
   - FastAPI (modern, async, based on Pydantic and Starlette)
   - Learn about Model-View-Controller (MVC) or Model-View-Template (MVT) design patterns

4. Databases:
   - SQL Database Basics (MySQL, PostgreSQL)
   - ORM (Object-Relational Mapping) Libraries like SQLAlchemy or Django ORM
   - NoSQL Databases (MongoDB)
      `,
      supportedDiagrams: [
        {
          diagramProvider: DiagramProvider.Mermaid,
          diagramType: MermaidDiagramTypes.MIND_MAP_DIAGRAM,
        },
        {
          diagramProvider: DiagramProvider.PlantUML,
          diagramType: PlantUmlDiagramTypes.MIND_MAP_DIAGRAM,
        },
      ],
    },
    {
      title: "Org Chart",
      requirement: `
Contoso University Organizational Chart

- President
  - Office of the President
    - Chief of Staff
    - Communications Director
  - Provost (Chief Academic Officer)
    - College of Arts and Sciences
      - Dean
      - Department Chairs (e.g., Biology, English, Mathematics)
    - College of Engineering
      - Dean
      - Department Chairs (e.g., Civil Engineering, Computer Science, Mechanical Engineering)
    - College of Business
      - Dean
      - Department Chairs (e.g., Accounting, Management, Marketing)
    - Library Services
      - Chief Librarian
  - Vice President of Administration and Finance
    - Human Resources Director
    - Chief Financial Officer
    - Information Technology Director
  - Vice President of Student Affairs
    - Admissions Director
    - Financial Aid Director
    - Student Life Director
  - Vice President of Research
    - Research Compliance Officer
    - Grants and Contracts Director
  - Vice President of Development and Alumni Relations
    - Development Director
    - Alumni Relations Director
      `,
      supportedDiagrams: [
        {
          diagramProvider: DiagramProvider.PlantUML,
          diagramType: PlantUmlDiagramTypes.WBS,
        },
      ],
    },
    {
      title: "Login user flow",
      requirement: `
Login flow

For registered users:

1. User navigates to login page.
2. Inputs username/email and password.
3. System verifies user details; if correct, user is logged in and redirected. 
4. If incorrect, user must retry or opt to recover password.

For non-registered users: 

1. User navigates to login page and selects register.
2. User fills out registration details and creates account.
3. System verifies details (sometimes with email confirmation).
4. Once verification is done, the user can log in with new credentials.
      `,
      supportedDiagrams: [
        {
          diagramProvider: DiagramProvider.Mermaid,
          diagramType: MermaidDiagramTypes.FLOWCHART_DIAGRAM,
        },
        {
          diagramProvider: DiagramProvider.PlantUML,
          diagramType: PlantUmlDiagramTypes.ACTIVITY_DIAGRAM,
        },
      ],
    },
    {
      title: "Cafe use cases",
      requirement: `
The system encapsulates several roles, including:

- Waiter
- Client
- Chef

These roles interact in the system through the following processes:

- The client is able to place an order.
- The waiter is responsible for receiving this order.
- The chef acknowledges the order and prepares the meal.

- Upon preparation of the meal, the waiter serves the food.
- The client proceeds to consume the food.
- After consumption, the client settles the bill.
- The waiter completes the process by affirmatively receiving the payment.
      `,
      supportedDiagrams: [
        {
          diagramProvider: DiagramProvider.PlantUML,
          diagramType: PlantUmlDiagramTypes.USE_CASE_DIAGRAM,
        },
      ],
    },
    {
      title: "Azure Cloud",
      requirement: `
Let's define diagram for the application hosted in azure cloud.

1. Define Kubernetes Cluster namespace
2. Within Kubernetes Cluster there should be 3 rectangles for Front End namespace, Backend namespace, Utility Services namespaces
3. Frotnend namespace should have single entry for ingress called API Gateway
4. Utility Services should have 2 pods
5. Backend namespace should have 3 pods calling one another
6. Fornend namespace should call one of the backend's pods
7. Kubernetes cluster should also have an entry for Kubernetes API
8. Backend Pods should call Cosmos DB, Azure SQL and Azure Key Vault
9. Kubernetes API should authenticate with RBAC by using Azure Active Directory
10. There also should be Azure Pipelines entry for CI/CD which pushes docker image to the Azure Contrainer Registry
11. Kubernetes API should pull docker images from the same Azure Contrainer Registry
12.DevOps actor should authenticate via Azure Active Directory
13. There should be also "Client Apps" block which calls "Load Balancer" block which calls "Frontend namespace"   
      `,
      supportedDiagrams: [
        {
          diagramProvider: DiagramProvider.PlantUML,
          diagramType: PlantUmlDiagramTypes.COMPONENT_DIAGRAM,
        },
      ],
    },
    {
      title: "Contoso University",
      requirement: `
The Contoso university training application from Microsoft utilizes the Entity Framework to create an object-relational mapping framework for .NET.

1. Student Entity: This represents a student at the university with properties such as ID, LastName, FirstMidName, EnrollmentDate. It also consists of a collection navigation property Enrollments.
2. Enrollment Entity: This represents a course enrollment of a student at the university with properties such as EnrollmentID, CourseID, StudentID, and Grade. It navigates to the Student and Course entities.
3. Course Entity: This stands for a course in the university and contains properties like CourseID, Title, Credits. It has a collection navigation property Enrollments and navigates to the Department entity.
4. Department Entity: It represents a department within the university, and possesses properties such as DepartmentID, Name, Budget, StartDate, InstructorID. It navigates to the Instructor entity and has a collection navigation property Courses.
5. Instructor Entity: This entity represents an instructor at the university and it contains properties such as ID, LastName, FirstMidName, HireDate. It has a collection navigation properties for Courses and OfficeAssignments.
6. OfficeAssignment Entity: This entity represents an office assignment for instructors, and possesses properties such as InstructorID, Location, and a navigation property to the Instructor entity.

The relationships between these entities are as follows:

1. A Student can be enrolled in multiple Courses, so there is a one-to-many relationship between Student and Enrollment entities.
2. A Course can have multiple students enrolled, hence a one-to-many relationship exists between Course and Enrollment entities.
3. A Course can be part of a single Department, establishing a one-to-many relationship between Department and Course entities.
4. An Instructor can be associated with one Department and can instruct many Courses, so there is a one-to-many relationship between Instructor and Course entities, as well as a one-to-many relationship between Instructor and Department entities.
5. Each Instructor can have an OfficeAssignment, showing a one-to-one relationship between Instructor and OfficeAssignment entities.
`,
      supportedDiagrams: [
        {
          diagramProvider: DiagramProvider.Mermaid,
          diagramType: MermaidDiagramTypes.ENTITY_RELATIONSHIP_DIAGRAM,
        },
        {
          diagramProvider: DiagramProvider.PlantUML,
          diagramType: PlantUmlDiagramTypes.CLASS_DIAGRAM,
        },
      ],
    },
  ];

  const itemsByDiagramProvider = items
    .filter((item) =>
      item.supportedDiagrams.some(
        (diagram) => diagram.diagramProvider === diagramProvider
      )
    )
    .map((item) => {
      return {
        ...item,
        diagramType: item.supportedDiagrams.find(
          (diagram) => diagram.diagramProvider === diagramProvider
        )!.diagramType,
      };
    });

  return (
    <div className="samples">
      <Flicking
        align="prev"
        circular={false}
        onMoveEnd={(e) => {
          console.log(e);
        }}
      >
        {itemsByDiagramProvider.map((item, i) => (
          <Button
            variant="contained"
            key={i}
            onClick={() => onSampleSelected(item.diagramType, item.requirement)}
          >
            {item.title}
          </Button>
        ))}
      </Flicking>
    </div>
  );
}
