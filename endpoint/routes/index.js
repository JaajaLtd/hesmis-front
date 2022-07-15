var express = require("express");
var router = express.Router();
const moment = require("moment");
const path = require("path");

/* GET home page. */
module.exports = function (passport) {
  //---------AUTHENTICATION ROUTE-------
  router.get("/", function (req, res, next) {
    //loader here.
    res.send({ success: true, data: [] });
  });

  router.get("/student-portal/auth/login", async function (req, res, next) {
    let id = req.query.visitId;
    let result={};
    res.send(result);
  });
  router.post("/student-portal/auth/login", async function (req, res, next) {
    let data = {
      "server": {
        "status": true,
        "message": "Login successful"
      },
      "access_token": {
        "token_type": "Bearer",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjExNDU2NCIsInN0dWRlbnRfbnVtYmVyIjoiMTUwNzMxMDA4MTg3IiwicmVnaXN0cmF0aW9uX251bWJlciI6IjE1L1UvODE4Ny9JU0UvUEUiLCJpYXQiOjE2MzA5Mjk4NzksImV4cCI6MTYzMTAxNjI3OX0.Pk3H0DWwx2MehbgOU9YWlwByWMvOV-Ayr7jqp5J2bBY"
      }
    }
    res.send(data);
  });
  router.post("/authenticate-user", async function (req, res, next) {
    let data = {
      "server": {
        "status": true,
        "message": "Login successful"
      },
      "access_token": {
        "token_type": "Bearer",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjExNDU2NCIsInN0dWRlbnRfbnVtYmVyIjoiMTUwNzMxMDA4MTg3IiwicmVnaXN0cmF0aW9uX251bWJlciI6IjE1L1UvODE4Ny9JU0UvUEUiLCJpYXQiOjE2MzA5Mjk4NzksImV4cCI6MTYzMTAxNjI3OX0.Pk3H0DWwx2MehbgOU9YWlwByWMvOV-Ayr7jqp5J2bBY"
      }
    }
    res.send(data);
  });

  router.get("/authenticate-user", async function (req, res, next) {
    let result = {
      status: "OK",
      data: [
        {
          user_id: 5042,
          email: "example@gmail.com",
          password: "example",
          firstname: "John",
          lastname: "Doe",
          othername: "",
          phone: "+256414123456",
          usertype: "admin",
          status: "Active"
        }
      ]
    }
    
    
    res.send({ data: result, status: 'OK' });
  });
  router.get("/student-portal/auth/profile", async function (req, res, next) {
    let result = {
      id: "114564",
      firstname: "JOHN",
      other_name: " ",
      lastname: "DOE",
      phone: "200731001878",
      email: "JOHNDOE@gmail.com",
      registration_number: "20/U/1878/ISD/PD",
      student_number: "200731001878",
      date_of_birth: "01/01/1990",
      home_district: "NO RECORDS AVAILABLE",
      national_id_number: null,
      passport_id_number: null,
      emis_number: "NO RECORDS AVAILABLE",
      nationality: "UGANDAN",
      religion: "RATHER NOT SAY",
      guardian_name: "NO RECORDS AVAILABLE",
      guardian_email: "NO RECORDS AVAILABLE",
      guardian_phone: "NO RECORDS AVAILABLE",
      guardian_relationship: "NO RECORDS AVAILABLE",
      guardian_address: "NO RECORDS AVAILABLE",
      gender: "MALE",
      avatar: "200731001878.jpeg",
      email_verified: false,
      email_verified_at: "2021-07-07T16:53:30.000Z",
      signature: null,
      fingerprint_scan: null,
      iris_scan: null,
      last_login: "2021-09-06T12:04:39.000Z",
      student_account_status_id: "134",
      student_account_status: "ACTIVE",
      is_default_password: false,
      password_changed_at: "2021-08-15T10:15:04.000Z",
      academic_records: [
        {
          id: 114542,
          student_programme_id: 114542,
          programme_id: 192,
          version_id: 191,
          version_title: "V1",
          has_plan: false,
          has_subject_combination_categories: false,
          has_specializations: false,
          is_current_version: true,
          version_records: {
            plan_semester_id: null,
            plan_semester: null,
            plan_year_id: null,
            plan_year: null,
            specialization_semester_id: null,
            specialization_semester: null,
            specialization_year_id: null,
            specialization_year: null,
            subject_combination_semester_id: null,
            subject_combination_semester: null,
            subject_combination_year_id: null,
            subject_combination_year: null
          },
          programme_title: "BACHELOR OF INFORMATION SYSTEMS",
          programme_code: "BIS",
          campus_id: 65,
          campus: "MAIN CAMPUS",
          entry_academic_year_id: 212,
          entry_academic_year: "2015/2016",
          intake_id: 41,
          intake: "AUGUST",
          entry_study_year_id: 462,
          entry_study_year: "YEAR 1",
          current_study_year_id: 463,
          current_study_year: "YEAR 2",
          programme_type_id: 357,
          metadata_programme_type_id: 25,
          programme_type: "EVENING",
          sponsorship_id: 118,
          sponsorship: "PRIVATE",
          fees_waiver_id: 1,
          fees_waiver: "GOVERNMENT",
          billing_category_id: 74,
          billing_category: "UGANDAN",
          residence_status_id: 120,
          residence_status: "NON-RESIDENT",
          hall_of_attachment_id: 109,
          hall_of_attachment: "NORTHHALL",
          hall_of_residence_id: null,
          hall_of_residence: null,
          student_academic_status_id: 122,
          student_academic_status: "NORMAL PROGRESS",
          old_student_number: "200731001878",
          is_affiliated: false,
          sponsor: "PARENT",
          marital_status_id: 194,
          marital_status: "SINGLE",
          is_on_loan_scheme: true,
          has_completed: true,
          is_current_programme: true,
          programme_study_years: [
            {
              id: 462,
              programme_study_years: "YEAR 1"
            },
            {
              id: 463,
              programme_study_years: "YEAR 2"
            },
            {
              id: 464,
              programme_study_years: "YEAR 3"
            }
          ]
        }
      ],
      payment_transactions: [
        {
          "item_no": "18",
          "item_name": "PC",
          "description": "TUHIIRIRWE RONAH ",
          "quantity": 10,
          "amount": 1700000,
          "price": 170000,
        },
        {
          "item_no": "18",
          "item_name": "PC",
          "description": "Very amany words here so that i can see how flexible this can be configured to look on multiple lines.",
          "quantity": 10,
          "amount": 1700000,
          "price": 170000,
        },
        {
          "item_no": "18",
          "item_name": "PC",
          "description": "TUHIIRIRWE RONAH ",
          "quantity": 10,
          "amount": 1700000,
          "price": 170000,
        }
      ]
    }

    res.send({ data: result, status: 'OK' });
  });

  router.get("/student-portal/auth/account-balance", async function (req, res, next) {
    let result = {};

    res.send(result);
  });
  router.get("/student-portal/auth/metadata", async function (req, res, next) {
    let result = {};

    res.send(result);
  });
  router.get("/student-portal/metadata", async function (req, res, next) {
    let result = {};

    res.send(result);
  });
  router.get("/app/institution-structure/student-portal", async function (req, res, next) {
    let result = {
      "id": "1",
      "institution_name": "Example University",
      "institution_address": "P.O.Box 1 Example, Kampala",
      "institution_slogan": "Knowledge and Skills for Service",
      "institution_website": "https://www.example.com ",
      "institution_logo": "uni_logog.png",
      "institution_email": "info@example.com",
      "telephone_1": "0414123456",
      "telephone_2": "0414123456",
      "academic_units": [
        "Schools",
        "Faculties",
        "Departments"
      ]
    }
    res.send({ data: result, status: 'OK' });
  });

  router.get("/student-portal/auth/academic-records", async function (req, res, next) {
    let result = [
      {
        "id": 114542,
        "student_programme_id": 114542,
        "programme_id": 192,
        "version_id": 191,
        "version_title": "V1",
        "has_plan": false,
        "has_subject_combination_categories": false,
        "has_specializations": false,
        "is_current_version": true,
        "version_records": {
          "plan_semester_id": null,
          "plan_semester": null,
          "plan_year_id": null,
          "plan_year": null,
          "specialization_semester_id": null,
          "specialization_semester": null,
          "specialization_year_id": null,
          "specialization_year": null,
          "subject_combination_semester_id": null,
          "subject_combination_semester": null,
          "subject_combination_year_id": null,
          "subject_combination_year": null
        },
        "programme_title": "BACHELOR OF INFORMATION SYSTEMS",
        "programme_code": "BIS",
        "campus_id": 65,
        "campus": "MAIN CAMPUS",
        "entry_academic_year_id": 212,
        "entry_academic_year": "2015/2016",
        "intake_id": 41,
        "intake": "AUGUST",
        "entry_study_year_id": 462,
        "entry_study_year": "YEAR 1",
        "current_study_year_id": 463,
        "current_study_year": "YEAR 2",
        "programme_type_id": 357,
        "metadata_programme_type_id": 25,
        "programme_type": "EVENING",
        "sponsorship_id": 118,
        "sponsorship": "PRIVATE",
        "fees_waiver_id": 1,
        "fees_waiver": "GOVERNMENT",
        "billing_category_id": 74,
        "billing_category": "UGANDAN",
        "residence_status_id": 120,
        "residence_status": "NON-RESIDENT",
        "hall_of_attachment_id": 109,
        "hall_of_attachment": "NORTHHALL",
        "hall_of_residence_id": null,
        "hall_of_residence": null,
        "student_academic_status_id": 122,
        "student_academic_status": "NORMAL PROGRESS",
        "old_student_number": "200731001878",
        "is_affiliated": false,
        "sponsor": "PARENT",
        "marital_status_id": 194,
        "marital_status": "SINGLE",
        "is_on_loan_scheme": true,
        "has_completed": true,
        "is_current_programme": true,
        "programme_study_years": [
          {
            "id": 462,
            "programme_study_years": "YEAR 1"
          },
          {
            "id": 463,
            "programme_study_years": "YEAR 2"
          },
          {
            "id": 464,
            "programme_study_years": "YEAR 3"
          }
        ]
      }
    ]

    res.send(result);
  });

  router.get("/student-portal/enrollment/current-semester", async function (req, res, next) {
    let result = {
      "currentSemesterError": {
        "server": {
          "message": "Resource Not Found!"
        }
      },
      "gettingCurrentSemester": false
    }


    res.send(result);
  });
  router.get("/student-portal/result/114542", async function (req, res, next) {
    let result =
    {
      student_programme_id: "114542",
      student_number: "200731001878",
      registration_number: "20/U/1878/ISD/PD",
      firstname: "JOHN",
      other_name: " ",
      lastname: "DOE",
      date_of_birth: "01/01/1990",
      gender: "MALE",
      avatar: "200731001878.jpeg",
      department_title: "COMPUTER SCIENCE",
      faculty_title: "SCIENCE",
      campus: "MAIN CAMPUS",
      intake: "AUGUST",
      programme_title: "BACHELOR OF INFORMATION SYSTEMS",
      programme_code: "BIS",
      programme_type: "EVENING",
      is_current_programme: true,
      has_completed: true,
      semesters: [
        {
          academic_year_id: "212",
          academic_year: "2015/2016",
          study_year_id: "3",
          programme_study_year: "YEAR 1",
          semester_id: "1",
          semester: "SEMESTER I",
          results: [
            {
              id: 5042,
              course_unit_id: 3710,
              course_unit_code: "SIS1104",
              course_unit_name: "DISCRETE MATHEMATICS",
              credit_unit: 4,
              final_mark: 69,
              course_unit_category_id: 33,
              course_unit_category: "CORE",
              grading_value_id: 12,
              grading_point: 3.5,
              weighting_score: 14,
              grading_letter: "C+",
              interpretation: "NP",
              has_passed: true,
              pass_mark: 50,
              remark_id: 221,
              remark: "NP"
            },
            {
              id: 5039,
              course_unit_id: 3707,
              course_unit_code: "SIS1101",
              course_unit_name: "INTRODUCTION TO COMPUTER AND INFORMATION SYSTEMS",
              credit_unit: 4,
              final_mark: 79,
              course_unit_category_id: 33,
              course_unit_category: "CORE",
              grading_value_id: 10,
              grading_point: 4.5,
              weighting_score: 18,
              grading_letter: "B+",
              interpretation: "NP",
              has_passed: true,
              pass_mark: 50,
              remark_id: 221,
              remark: "NP"
            },
            {
              id: 5038,
              course_unit_id: 3294,
              course_unit_code: "SHM1101",
              course_unit_name: "COMMUNICATION SKILLS",
              credit_unit: 3,
              final_mark: 68,
              course_unit_category_id: 33,
              course_unit_category: "CORE",
              grading_value_id: 12,
              grading_point: 3.5,
              weighting_score: 10.5,
              grading_letter: "C+",
              interpretation: "NP",
              has_passed: true,
              pass_mark: 50,
              remark_id: 221,
              remark: "NP"
            },
            {
              id: 5041,
              course_unit_id: 3709,
              course_unit_code: "SIS1103",
              course_unit_name: "BUSINESS STATISTICS",
              credit_unit: 4,
              final_mark: 62,
              course_unit_category_id: 33,
              course_unit_category: "CORE",
              grading_value_id: 13,
              grading_point: 3,
              weighting_score: 12,
              grading_letter: "C",
              interpretation: "NP",
              has_passed: true,
              pass_mark: 50,
              remark_id: 221,
              remark: "NP"
            },
            {
              id: 5040,
              course_unit_id: 3708,
              course_unit_code: "SIS1102",
              course_unit_name: "COMPUTER APPLICATIONS",
              credit_unit: 4,
              final_mark: 69,
              course_unit_category_id: 33,
              course_unit_category: "CORE",
              grading_value_id: 12,
              grading_point: 3.5,
              weighting_score: 14,
              grading_letter: "C+",
              interpretation: "NP",
              has_passed: true,
              pass_mark: 50,
              remark_id: 221,
              remark: "NP"
            }
          ],
          retake_courses: [],
          remark: "NP",
          current_tcu: 19,
          current_tws: 68.5,
          current_gpa: "3.61",
          previous_ctcu: null,
          previous_ctws: null,
          previous_cgpa: null,
          cumulative_tcu: 19,
          cumulative_tws: 68.5,
          previous_cgpas: [],
          cgpa: "3.61"
        },
        {
          academic_year_id: "212",
          academic_year: "2015/2016",
          study_year_id: "3",
          programme_study_year: "YEAR 1",
          semester_id: "2",
          semester: "SEMESTER II",
          results: [
            {
              id: 5043,
              course_unit_id: 3711,
              course_unit_code: "SIA1206",
              course_unit_name: "INDUSTRIAL ATTACHMENT1",
              credit_unit: 4,
              final_mark: 89,
              course_unit_category_id: 33,
              course_unit_category: "CORE",
              grading_value_id: 9,
              grading_point: 5,
              weighting_score: 20,
              grading_letter: "A",
              interpretation: "NP",
              has_passed: true,
              pass_mark: 50,
              remark_id: 221,
              remark: "NP"
            },
            {
              id: 5048,
              course_unit_id: 3716,
              course_unit_code: "SIS1205",
              course_unit_name: "INTERNET TECHNOLOGIES AND WEBPAGE AUTHORING",
              credit_unit: 4,
              final_mark: 85,
              course_unit_category_id: 33,
              course_unit_category: "CORE",
              grading_value_id: 9,
              grading_point: 5,
              weighting_score: 20,
              grading_letter: "A",
              interpretation: "NP",
              has_passed: true,
              pass_mark: 50,
              remark_id: 221,
              remark: "NP"
            },
            {
              id: 5047,
              course_unit_id: 3715,
              course_unit_code: "SIS1204",
              course_unit_name: "COMPUTER MAINTENANCE AND MANAGEMENT",
              credit_unit: 4,
              final_mark: 77,
              course_unit_category_id: 33,
              course_unit_category: "CORE",
              grading_value_id: 10,
              grading_point: 4.5,
              weighting_score: 18,
              grading_letter: "B+",
              interpretation: "NP",
              has_passed: true,
              pass_mark: 50,
              remark_id: 221,
              remark: "NP"
            },
            {
              id: 5044,
              course_unit_id: 3712,
              course_unit_code: "SIS1201",
              course_unit_name: "MANAGING INFORMATION SYSTEM",
              credit_unit: 4,
              final_mark: 62,
              course_unit_category_id: 33,
              course_unit_category: "CORE",
              grading_value_id: 13,
              grading_point: 3,
              weighting_score: 12,
              grading_letter: "C",
              interpretation: "NP",
              has_passed: true,
              pass_mark: 50,
              remark_id: 221,
              remark: "NP"
            },
            {
              id: 5046,
              course_unit_id: 3714,
              course_unit_code: "SIS1203",
              course_unit_name: "BUSINESS COMPUTING",
              credit_unit: 4,
              final_mark: 78,
              course_unit_category_id: 33,
              course_unit_category: "CORE",
              grading_value_id: 10,
              grading_point: 4.5,
              weighting_score: 18,
              grading_letter: "B+",
              interpretation: "NP",
              has_passed: true,
              pass_mark: 50,
              remark_id: 221,
              remark: "NP"
            },
            {
              id: 5045,
              course_unit_id: 3713,
              course_unit_code: "SIS1202",
              course_unit_name: "INTRODUCTION TO PROGRAMMING",
              credit_unit: 4,
              final_mark: 84,
              course_unit_category_id: 33,
              course_unit_category: "CORE",
              grading_value_id: 9,
              grading_point: 5,
              weighting_score: 20,
              grading_letter: "A",
              interpretation: "NP",
              has_passed: true,
              pass_mark: 50,
              remark_id: 221,
              remark: "NP"
            }
          ],
          retake_courses: [],
          remark: "NP",
          current_tcu: 24,
          current_tws: 108,
          current_gpa: "4.50",
          previous_ctcu: 19,
          previous_ctws: 68.5,
          previous_cgpa: "3.61",
          cumulative_tcu: 43,
          cumulative_tws: 176.5,
          previous_cgpas: [
            "3.61"
          ],
          cgpa: "4.10"
        },
        {
          academic_year_id: "207",
          academic_year: "2016/2017",
          study_year_id: "4",
          programme_study_year: "YEAR 2",
          semester_id: "1",
          semester: "SEMESTER I",
          results: [
            {
              id: 5053,
              course_unit_id: 3721,
              course_unit_code: "SIS2105",
              course_unit_name: "MULTIMEDIA SYSTEMS",
              credit_unit: 4,
              final_mark: 86,
              course_unit_category_id: 33,
              course_unit_category: "CORE",
              grading_value_id: 9,
              grading_point: 5,
              weighting_score: 20,
              grading_letter: "A",
              interpretation: "NP",
              has_passed: true,
              pass_mark: 50,
              remark_id: 221,
              remark: "NP"
            },
            {
              id: 5049,
              course_unit_id: 3717,
              course_unit_code: "SIS2101",
              course_unit_name: "E-COMMERCE",
              credit_unit: 4,
              final_mark: 81,
              course_unit_category_id: 33,
              course_unit_category: "CORE",
              grading_value_id: 9,
              grading_point: 5,
              weighting_score: 20,
              grading_letter: "A",
              interpretation: "NP",
              has_passed: true,
              pass_mark: 50,
              remark_id: 221,
              remark: "NP"
            },
            {
              id: 5051,
              course_unit_id: 3719,
              course_unit_code: "SIS2103",
              course_unit_name: "DATABASE SYSTEMS DESIGN AND DEVELOPMENT",
              credit_unit: 4,
              final_mark: 68,
              course_unit_category_id: 33,
              course_unit_category: "CORE",
              grading_value_id: 12,
              grading_point: 3.5,
              weighting_score: 14,
              grading_letter: "C+",
              interpretation: "NP",
              has_passed: true,
              pass_mark: 50,
              remark_id: 221,
              remark: "NP"
            },
            {
              id: 5050,
              course_unit_id: 3718,
              course_unit_code: "SIS2102",
              course_unit_name: "INFORMATION SYSTEM ANALYSIS AND DESIGN",
              credit_unit: 4,
              final_mark: 85,
              course_unit_category_id: 33,
              course_unit_category: "CORE",
              grading_value_id: 9,
              grading_point: 5,
              weighting_score: 20,
              grading_letter: "A",
              interpretation: "NP",
              has_passed: true,
              pass_mark: 50,
              remark_id: 221,
              remark: "NP"
            },
            {
              id: 5052,
              course_unit_id: 3720,
              course_unit_code: "SIS2104",
              course_unit_name: "OBJECT-ORIENTED PROGRAMMING",
              credit_unit: 4,
              final_mark: 85,
              course_unit_category_id: 33,
              course_unit_category: "CORE",
              grading_value_id: 9,
              grading_point: 5,
              weighting_score: 20,
              grading_letter: "A",
              interpretation: "NP",
              has_passed: true,
              pass_mark: 50,
              remark_id: 221,
              remark: "NP"
            }
          ],
          retake_courses: [],
          remark: "NP",
          current_tcu: 20,
          current_tws: 94,
          current_gpa: "4.70",
          previous_ctcu: 43,
          previous_ctws: 176.5,
          previous_cgpa: "4.10",
          cumulative_tcu: 63,
          cumulative_tws: 270.5,
          previous_cgpas: [
            "3.61",
            "4.10"
          ],
          cgpa: "4.29"
        },
        {
          academic_year_id: "207",
          academic_year: "2016/2017",
          study_year_id: "4",
          programme_study_year: "YEAR 2",
          semester_id: "2",
          semester: "SEMESTER II",
          results: [
            {
              id: 5059,
              course_unit_id: 3727,
              course_unit_code: "SIS2205",
              course_unit_name: "BUSINESS PROCESS ANALYSIS AND MODELING",
              credit_unit: 4,
              final_mark: 86,
              course_unit_category_id: 33,
              course_unit_category: "CORE",
              grading_value_id: 9,
              grading_point: 5,
              weighting_score: 20,
              grading_letter: "A",
              interpretation: "NP",
              has_passed: true,
              pass_mark: 50,
              remark_id: 221,
              remark: "NP"
            },
            {
              id: 5058,
              course_unit_id: 3726,
              course_unit_code: "SIS2204",
              course_unit_name: "RESEARCH METHODS",
              credit_unit: 4,
              final_mark: 84,
              course_unit_category_id: 33,
              course_unit_category: "CORE",
              grading_value_id: 9,
              grading_point: 5,
              weighting_score: 20,
              grading_letter: "A",
              interpretation: "NP",
              has_passed: true,
              pass_mark: 50,
              remark_id: 221,
              remark: "NP"
            },
            {
              id: 5056,
              course_unit_id: 3724,
              course_unit_code: "SIS2202",
              course_unit_name: "WEBSITE DESIGN, PROGRAMMING AND ADMINISTRATION",
              credit_unit: 4,
              final_mark: 84,
              course_unit_category_id: 33,
              course_unit_category: "CORE",
              grading_value_id: 9,
              grading_point: 5,
              weighting_score: 20,
              grading_letter: "A",
              interpretation: "NP",
              has_passed: true,
              pass_mark: 50,
              remark_id: 221,
              remark: "NP"
            },
            {
              id: 5055,
              course_unit_id: 3723,
              course_unit_code: "SIS2201",
              course_unit_name: "COMPUTER NETWORKS AND DATA COMMUNICATIONS",
              credit_unit: 4,
              final_mark: 75,
              course_unit_category_id: 33,
              course_unit_category: "CORE",
              grading_value_id: 10,
              grading_point: 4.5,
              weighting_score: 18,
              grading_letter: "B+",
              interpretation: "NP",
              has_passed: true,
              pass_mark: 50,
              remark_id: 221,
              remark: "NP"
            },
            {
              id: 5054,
              course_unit_id: 3722,
              course_unit_code: "SIA2206",
              course_unit_name: "INDUSTRIAL ATTACHMENT 1I",
              credit_unit: 4,
              final_mark: 87,
              course_unit_category_id: 33,
              course_unit_category: "CORE",
              grading_value_id: 9,
              grading_point: 5,
              weighting_score: 20,
              grading_letter: "A",
              interpretation: "NP",
              has_passed: true,
              pass_mark: 50,
              remark_id: 221,
              remark: "NP"
            },
            {
              id: 5057,
              course_unit_id: 3725,
              course_unit_code: "SIS2203",
              course_unit_name: "DATABASE SYSTEMS IMPLEMENTATION",
              credit_unit: 4,
              final_mark: 89,
              course_unit_category_id: 33,
              course_unit_category: "CORE",
              grading_value_id: 9,
              grading_point: 5,
              weighting_score: 20,
              grading_letter: "A",
              interpretation: "NP",
              has_passed: true,
              pass_mark: 50,
              remark_id: 221,
              remark: "NP"
            }
          ],
          retake_courses: [],
          remark: "NP",
          current_tcu: 24,
          current_tws: 118,
          current_gpa: "4.92",
          previous_ctcu: 63,
          previous_ctws: 270.5,
          previous_cgpa: "4.29",
          cumulative_tcu: 87,
          cumulative_tws: 388.5,
          previous_cgpas: [
            "3.61",
            "4.10",
            "4.29"
          ],
          cgpa: "4.47"
        },
        {
          academic_year_id: "206",
          academic_year: "2017/2018",
          study_year_id: "5",
          programme_study_year: "YEAR 3",
          semester_id: "1",
          semester: "SEMESTER I",
          results: [
            {
              id: 5063,
              course_unit_id: 3731,
              course_unit_code: "SIS3103",
              course_unit_name: "INFORMATION SYSTEM SECURITY",
              credit_unit: 4,
              final_mark: 73,
              course_unit_category_id: 33,
              course_unit_category: "CORE",
              grading_value_id: 11,
              grading_point: 4,
              weighting_score: 16,
              grading_letter: "B",
              interpretation: "NP",
              has_passed: true,
              pass_mark: 50,
              remark_id: 221,
              remark: "NP"
            },
            {
              id: 5060,
              course_unit_id: 3728,
              course_unit_code: "SHM3101",
              course_unit_name: "ENTREPRENEURSHP SKILLS",
              credit_unit: 3,
              final_mark: 51,
              course_unit_category_id: 33,
              course_unit_category: "CORE",
              grading_value_id: 15,
              grading_point: 2,
              weighting_score: 6,
              grading_letter: "D",
              interpretation: "NP",
              has_passed: true,
              pass_mark: 50,
              remark_id: 221,
              remark: "NP"
            },
            {
              id: 5062,
              course_unit_id: 3730,
              course_unit_code: "SIS3102",
              course_unit_name: "INFORMATION SYSTEM PROJECT MANAGEMENT",
              credit_unit: 4,
              final_mark: 75,
              course_unit_category_id: 33,
              course_unit_category: "CORE",
              grading_value_id: 10,
              grading_point: 4.5,
              weighting_score: 18,
              grading_letter: "B+",
              interpretation: "NP",
              has_passed: true,
              pass_mark: 50,
              remark_id: 221,
              remark: "NP"
            },
            {
              id: 5064,
              course_unit_id: 3732,
              course_unit_code: "SIS3104",
              course_unit_name: "SOFTWARE  ENGINEERING PRINCIPALS SKILLS",
              credit_unit: 3,
              final_mark: 74,
              course_unit_category_id: 33,
              course_unit_category: "CORE",
              grading_value_id: 11,
              grading_point: 4,
              weighting_score: 12,
              grading_letter: "B",
              interpretation: "NP",
              has_passed: true,
              pass_mark: 50,
              remark_id: 221,
              remark: "NP"
            },
            {
              id: 5061,
              course_unit_id: 3729,
              course_unit_code: "SIS3101",
              course_unit_name: "SYSTEMS ADMINISTRATION",
              credit_unit: 4,
              final_mark: 78,
              course_unit_category_id: 33,
              course_unit_category: "CORE",
              grading_value_id: 10,
              grading_point: 4.5,
              weighting_score: 18,
              grading_letter: "B+",
              interpretation: "NP",
              has_passed: true,
              pass_mark: 50,
              remark_id: 221,
              remark: "NP"
            }
          ],
          retake_courses: [],
          remark: "NP",
          current_tcu: 18,
          current_tws: 70,
          current_gpa: "3.89",
          previous_ctcu: 87,
          previous_ctws: 388.5,
          previous_cgpa: "4.47",
          cumulative_tcu: 105,
          cumulative_tws: 458.5,
          previous_cgpas: [
            "3.61",
            "4.10",
            "4.29",
            "4.47"
          ],
          cgpa: "4.37"
        },
        {
          academic_year_id: "206",
          academic_year: "2017/2018",
          study_year_id: "5",
          programme_study_year: "YEAR 3",
          semester_id: "2",
          semester: "SEMESTER II",
          results: [
            {
              id: 5065,
              course_unit_id: 3733,
              course_unit_code: "SIS3201",
              course_unit_name: "DECISION SUPPORT SYSTEMS",
              credit_unit: 3,
              final_mark: 85,
              course_unit_category_id: 33,
              course_unit_category: "CORE",
              grading_value_id: 9,
              grading_point: 5,
              weighting_score: 15,
              grading_letter: "A",
              interpretation: "NP",
              has_passed: true,
              pass_mark: 50,
              remark_id: 221,
              remark: "NP"
            },
            {
              id: 5069,
              course_unit_id: 3737,
              course_unit_code: "SIS3205",
              course_unit_name: "BIS PROJECT",
              credit_unit: 5,
              final_mark: 83,
              course_unit_category_id: 33,
              course_unit_category: "CORE",
              grading_value_id: 9,
              grading_point: 5,
              weighting_score: 25,
              grading_letter: "A",
              interpretation: "NP",
              has_passed: true,
              pass_mark: 50,
              remark_id: 221,
              remark: "NP"
            },
            {
              id: 5066,
              course_unit_id: 3734,
              course_unit_code: "SIS3202",
              course_unit_name: "SOCIAL ISSUES IN COMPUTING",
              credit_unit: 3,
              final_mark: 76,
              course_unit_category_id: 33,
              course_unit_category: "CORE",
              grading_value_id: 10,
              grading_point: 4.5,
              weighting_score: 13.5,
              grading_letter: "B+",
              interpretation: "NP",
              has_passed: true,
              pass_mark: 50,
              remark_id: 221,
              remark: "NP"
            },
            {
              id: 5067,
              course_unit_id: 3735,
              course_unit_code: "SIS3203",
              course_unit_name: "ORGANIZATIONAL BEHAVIOR",
              credit_unit: 4,
              final_mark: 68,
              course_unit_category_id: 33,
              course_unit_category: "CORE",
              grading_value_id: 12,
              grading_point: 3.5,
              weighting_score: 14,
              grading_letter: "C+",
              interpretation: "NP",
              has_passed: true,
              pass_mark: 50,
              remark_id: 221,
              remark: "NP"
            },
            {
              id: 5068,
              course_unit_id: 3736,
              course_unit_code: "SIS3204",
              course_unit_name: "BUSINESS INTELLIGENCE AND DATA WAREHOUSING",
              credit_unit: 4,
              final_mark: 76,
              course_unit_category_id: 33,
              course_unit_category: "CORE",
              grading_value_id: 10,
              grading_point: 4.5,
              weighting_score: 18,
              grading_letter: "B+",
              interpretation: "NP",
              has_passed: true,
              pass_mark: 50,
              remark_id: 221,
              remark: "NP"
            }
          ],
          retake_courses: [],
          remark: "NP",
          current_tcu: 19,
          current_tws: 85.5,
          current_gpa: "4.50",
          previous_ctcu: 105,
          previous_ctws: 458.5,
          previous_cgpa: "4.37",
          cumulative_tcu: 124,
          cumulative_tws: 544,
          previous_cgpas: [
            "3.61",
            "4.10",
            "4.29",
            "4.47",
            "4.37"
          ],
          cgpa: "4.39"
        }
      ]
    }
    res.send({ data: result, status: 'OK' });
  });
  router.get("/scholarships", async function (req, res, next) {
    console.log("THIS ENDPOINT HAS BEEN CALLED");
    let result = {
      status: "OK",
      data: [
        {
          academic_year_id: "212",
          academic_year: "2015/2016",
          study_year_id: "3",
          programme_study_year: "YEAR",
          semester_id: "1",
          semester: "SUMMER INTAKE",
          results: [
            {
              id: 5042,
              scholarshipId: 3710,
              scholarshipCode: "UK2205",
              scholarshipName: "Transform Together Scholarships for International and European Union (non-UK) Students",
              institutionName: "Sheffield Hallam University",
              applicationDeadline: "31 May 2022 (annual)",
              countryOfStudy: "Sheffield, UK",
              levelOfStudy: "Bachelors/Masters Degree",
              status: "Active",
              grading_point: 3.5,
              weighting_score: 14,
              grading_letter: "C+",
              interpretation: "NP",
              has_passed: true,
              pass_mark: 50,
              remark_id: 221,
              remark: "NP"
            }
          ],
          retake_courses: [],
          remark: "NP",
          current_tcu: 19,
          current_tws: 68.5,
          current_gpa: "3.61",
          previous_ctcu: null,
          previous_ctws: null,
          previous_cgpa: null,
          cumulative_tcu: 19,
          cumulative_tws: 68.5,
          previous_cgpas: [],
          cgpa: "3.61"
        }
      ]
    }
    
    
    res.send({ data: result, status: 'OK' });
  });
  ////student-portal/result/
  return router;
};
