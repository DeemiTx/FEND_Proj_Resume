var bio = {
    "name": "Nadeem Afzal",
    "role": "Solution Architect",
    "contacts": {
        "mobile": "420-555-1212",
        "email": "dk@abc.com",
        "github": "DeemiK",
        "twitter": "@DeemiK",
        "location" : "Dallas"
    },
    "welcomeMsg": "Welcome to Computer world!!!",
    "skills": ["Java", "JEE", "XML", "XSL"],
    "biopic": "images/fry.jpg",
    "display": function(){
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole).prepend(formattedName);

        $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg));

        $("#topContacts, #footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
        $("#topContacts, #footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
        $("#topContacts, #footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.github));
        $("#topContacts, #footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.twitter));
        $("#topContacts, #footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

        $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));

        if (bio.skills.length !== 0){
            $("#header").append(HTMLskillsStart);
            for (var i=0; i<bio.skills.length; i++) {
                $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
            }
        }
    }
};
bio.display();

var education = {
    "schools": [
        {
            "name": "UTexas",
            "city": "Austin",
            "degree": "MS",
            "majors": ["EE", "ME"],
            "dates": "2000-2002",
            "url": "utexas.edu"
        },
        {
            "name": "UCLA",
            "city": "Los Angeles",
            "degree": "BS",
            "majors": ["CS", "IE"],
            "dates": "1996-2000",
            "url": "ucla.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "Fundamentals of A",
            "school": "Main Tech",
            "dates": "2004-2005",
            "url": "main.edu"
        },
        {
            "title": "Fundamentals of B",
            "school": "Byte Tech",
            "dates": "2007-2008",
            "url": "byte.edu"
        }
    ],
    "display": function(){
        education.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append((HTMLschoolName.replace("%data%", school.name)) + (HTMLschoolDegree.replace("%data%", school.degree)));
            $(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.dates));
            $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.city));
            var allMajors = "";
            school.majors.forEach(function(major) {
                allMajors += major + ", ";
            });
            $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", allMajors.substring(0, allMajors.length - 2)));
        });

        $("#education").append(HTMLonlineClasses);

        education.onlineCourses.forEach(function(course) {
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append((HTMLonlineTitle.replace("%data%", course.title)) + (HTMLonlineSchool.replace("%data%", course.school)));
            $(".education-entry:last").append(HTMLonlineDates.replace("%data%", course.dates));
            $(".education-entry:last").append(HTMLonlineURL.replace("%data%", course.url));
        });
    }
};
education.display();


var work = {
    "jobs": [
        {
            "employer": "UTexas",
            "title": "Research Scientist",
            "location": "Austin, TX",
            "dates": "Jan 2000 - Dec 2003",
            "description": "Had a great time conducting research.  Had a great time conducting research.  Had a great time conducting research.  Had a great time conducting research.  Had a great time conducting research.  Had a great time conducting research.  Had a great time conducting research.  Had a great time conducting research.  Had a great time conducting research.  Had a great time conducting research!!!"
        },
        {
            "employer": "AT&T",
            "title": "Technical Architect",
            "location": "San Ramon, CA",
            "dates": "Jan 2004 - Present",
            "description": "Had a great time designing software.  Had a great time designing software.  Had a great time designing software.  Had a great time designing software.  Had a great time designing software.  Had a great time designing software.  Had a great time designing software.  Had a great time designing software.  Had a great time designing software.  Had a great time designing software.  Had a great time designing software.  Had a great time designing software.  Had a great time designing software!!!"
        }
    ],
    "display": function(){
        work.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append((HTMLworkEmployer.replace("%data%", job.employer))+(HTMLworkTitle.replace("%data%", job.title)));
            $(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
            $(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));
            $(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
        });
    }
};
work.display();


var projects = {
    "projects": [
        {
            "title": "Project Bluewhale",
            "dates": "2013-2015",
            "description": "Top secret.  Top secret.  Top secret.  Top secret.  Top secret.  Top secret.  Top secret.  Top secret.  Top secret.  Top secret.  Top secret.  Top secret.  Top secret.  Top secret.  Top secret.  Top secret.  Top secret.  Top secret.  Top secret.  Top secret.  Top secret.  Top secret.  Top secret.  Top secret.  Top secret!!!",
            "images": ["images/fry.jpg", "images/cat3.jpg"]
        },
        {
            "title": "Project Tiger",
            "dates": "2016-Present",
            "description": "Not that secret.  Not that secret.  Not that secret.  Not that secret.  Not that secret.  Not that secret.  Not that secret.  Not that secret.  Not that secret.  Not that secret.  Not that secret.  Not that secret.  Not that secret.  Not that secret.  Not that secret.  Not that secret.  Not that secret.  Not that secret.  Not that secret.  Not that secret.  Not that secret.  Not that secret!!!",
            "images": ["images/fry.jpg"]
        }
    ],
    "display": function(){
        projects.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.title));
            $(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.dates));
            $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.description));
            project.images.forEach(function(image) {
                $(".project-entry:last").append(HTMLprojectImage.replace("%data%", image));
            });
        });
    }
};
projects.display();

$("#mapDiv").append(googleMap);