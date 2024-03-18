// nav-bar-for-all-pages

let navBar = `

    <div class="course_offer">

        <a href="">

            <span>Free Courses 🌟 Sale Ends Soon, Get It Now</span>

            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">

                <path fill-rule="evenodd" clip-rule="evenodd" 
                d="M3.5 10.5C3.5 10.0858 3.83579 9.75 4.25 9.75L14.8879 9.75L10.7302 5.79062C10.4316 5.50353 10.4223 5.02875 10.7094 4.73017C10.9965 4.43159 11.4713 4.42228 11.7698 4.70937L17.2698 9.95937C17.4169 10.1008 17.5 10.296 17.5 10.5C17.5 10.704 17.4169 10.8992 17.2698 11.0406L11.7698 16.2906C11.4713 16.5777 10.9965 16.5684 10.7094 16.2698C10.4223 15.9713 10.4316 15.4965 10.7302 15.2094L14.8879 11.25L4.25 11.25C3.83579 11.25 3.5 10.9142 3.5 10.5Z"
                fill="white"/>

            </svg>

        </a>

    </div>

    <nav>

        <div class="logo_navbar">

            <div class="logo">

                <a href="">

                    <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">

                        <rect y="0.5" width="44" height="44" rx="8" fill="#FF9500"/>
                        <path d="M9.09961 36.0802L17.9268 27.2531H26.7539V18.4259L35.5811 27.2531L26.7539 36.0802H9.09961Z" fill="white"/>
                        <path d="M9.09961 18.4259L17.9268 27.2531V18.4259H26.7539L35.5811 9.59877H17.9268L9.09961 18.4259Z" fill="white"/>

                    </svg>

                </a>

            </div>

            <div class="navbar">

                <ul>

                    <li class="home"><a href="index.html">Home</a></li>
                    <li class="courses"><a href="courses.html">Courses</a></li>
                    <li class="about"><a href="about.html">About Us</a></li>
                    <li class="price"><a href="pricing.html">Pricing</a></li>
                    <li class="contact"><a href="contact.html">Contact</a></li>

                </ul>

            </div>

        </div>

        <div class="signup_login">

            <a class="signup" href="">Sign Up</a>

            <a class="login" href="">Login</a>

            <div class="navbar_phone">

                <div class="span_container">

                    <span class="top_span"></span>

                    <span class="middle_span"></span>

                    <span class="bottom_span"></span>

                </div>

            </div>

        </div>

        <div class="navbar_phone_content">

            <ul>

                <li class="home"><a href="index.html">Home</a></li>
                <li class="courses"><a href="courses.html">Courses</a></li>
                <li class="about"><a href="">About Us</a></li>
                <li class="price"><a href="">Pricing</a></li>
                <li class="contact"><a href="">Contact</a></li>

            </ul>

        </div>

    </nav>

`;

$(".headerJs").html(navBar);

if (page === 'pageIndex'){

    $(".home").addClass("active")

}

if (page === 'pageCourses'){

    $(".courses").addClass("active")

}

if (page === 'pageAbout'){

    $(".about").addClass("active")

}

if (page === 'pagePricing'){

    $(".price").addClass("active")

}

if (page === 'pageContact'){

    $(".contact").addClass("active")

}

// footer-for-all-pages

let footer = `

    <div class="footer_container">

        <div class="logo_contact">

            <div class="footer_logo">

                <a href="">

                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">

                        <rect width="44" height="44" rx="6" fill="#FF9500"/>
                        <path d="M9.09961 35.5801L17.9268 26.753H26.7539V17.9258L35.5811 26.753L26.7539 35.5801H9.09961Z" fill="white"/>
                        <path d="M9.09961 17.9258L17.9268 26.753V17.9258H26.7539L35.5811 9.09863H17.9268L9.09961 17.9258Z" fill="white"/>

                    </svg>

                </a>

            </div>

            <div class="contact_det">

                <div class="contact_det_icon">

                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">

                        <path d="M1.25 7.22425V14.375C1.25 15.7557 2.36929 16.875 3.75 16.875H16.25C17.6307 16.875 18.75 15.7557 18.75 14.375V7.22425L11.3102 11.8026C10.5067 12.297 9.49327 12.297 8.68976 11.8026L1.25 7.22425Z" fill="#262626"/>
                        <path d="M18.75 5.75652V5.625C18.75 4.24429 17.6307 3.125 16.25 3.125H3.75C2.36929 3.125 1.25 4.24429 1.25 5.625V5.75652L9.34488 10.738C9.74664 10.9852 10.2534 10.9852 10.6551 10.738L18.75 5.75652Z" fill="#262626"/>

                    </svg>

                </div>

                <p>devomar.2004@gmail.com</p>

            </div>

            <!-- ====== -->

            <div class="contact_det">

                <div class="contact_det_icon">

                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">

                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 3.75C1.25 2.36929 2.36929 1.25 3.75 1.25H4.89302C5.61 1.25 6.23498 1.73796 6.40887 2.43354L7.33037 6.11952C7.48284 6.72942 7.25495 7.37129 6.75202 7.74849L5.674 8.557C5.56206 8.64096 5.53772 8.7639 5.56917 8.84974C6.51542 11.4329 8.5671 13.4846 11.1503 14.4308C11.2361 14.4623 11.359 14.4379 11.443 14.326L12.2515 13.248C12.6287 12.7451 13.2706 12.5172 13.8805 12.6696L17.5665 13.5911C18.262 13.765 18.75 14.39 18.75 15.107V16.25C18.75 17.6307 17.6307 18.75 16.25 18.75H14.375C7.12626 18.75 1.25 12.8737 1.25 5.625V3.75Z" fill="#262626"/>

                    </svg>


                </div>

                <p>+20 01140067845</p>

            </div>

            <!-- ====== -->

            <div class="contact_det last_contact">

                <div class="contact_det_icon">

                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">

                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.61646 18.6259C9.64163 18.6405 9.66141 18.6517 9.67542 18.6596L9.69869 18.6726C9.88441 18.7745 10.1148 18.7738 10.3007 18.6729L10.3246 18.6596C10.3386 18.6517 10.3584 18.6405 10.3835 18.6259C10.4339 18.5967 10.5058 18.5542 10.5963 18.4985C10.7771 18.3872 11.0323 18.223 11.3372 18.0076C11.9459 17.5776 12.7581 16.9395 13.5721 16.1061C15.1922 14.4474 16.875 11.9551 16.875 8.75C16.875 4.95304 13.797 1.875 10 1.875C6.20304 1.875 3.125 4.95304 3.125 8.75C3.125 11.9551 4.80777 14.4474 6.42788 16.1061C7.24188 16.9395 8.05409 17.5776 8.66282 18.0076C8.96771 18.223 9.22295 18.3872 9.40375 18.4985C9.49419 18.5542 9.56612 18.5967 9.61646 18.6259ZM10 11.25C11.3807 11.25 12.5 10.1307 12.5 8.75C12.5 7.36929 11.3807 6.25 10 6.25C8.61929 6.25 7.5 7.36929 7.5 8.75C7.5 10.1307 8.61929 11.25 10 11.25Z" fill="#262626"/>

                    </svg>

                </div>

                <p>Zagazig , Al-Sharqia , Egypt</p>

            </div>

        </div>

        <div class="home_about_social">

            <div class="home_links">

                <h3 class="footer_links_title">Home</h3>

                <a class="footer_link" href="">Benefits</a>

                <a class="footer_link" href="">Our Courses</a>

                <a class="footer_link" href="">Our Testimonials</a>

                <a class="footer_link last_link" href="">Our FAQ</a>

            </div>

            <div class="about_links">

                <h3 class="footer_links_title">About Us</h3>

                <a class="footer_link" href="">Company</a>

                <a class="footer_link" href="">Achievements</a>

                <a class="footer_link last_link" href="">Our Goals</a>

            </div>

            <div class="social_links">

                <h3 class="footer_links_title">Social Profiles</h3>

                <div class="social_links_container">

                    <a class="social_media_links" href="">

                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">

                            <g clip-path="url(#clip0_109_1320)">

                                <path d="M20.333 10C20.333 4.47715 15.8559 0 10.333 0C4.81016 0 0.333008 4.47715 0.333008 10C0.333008 14.9912 3.98984 19.1283 8.77051 19.8785V12.8906H6.23145V10H8.77051V7.79688C8.77051 5.29063 10.2635 3.90625 12.5477 3.90625C13.6414 3.90625 14.7861 4.10156 14.7861 4.10156V6.5625H13.5252C12.283 6.5625 11.8955 7.3334 11.8955 8.125V10H14.6689L14.2256 12.8906H11.8955V19.8785C16.6762 19.1283 20.333 14.9912 20.333 10Z" fill="#333333"/>

                            </g>

                            <defs>

                                <clipPath id="clip0_109_1320">

                                    <rect width="20" height="20" fill="white" transform="translate(0.333008)"/>

                                </clipPath>

                            </defs>

                        </svg>

                    </a>

                    <a class="social_media_links" href="">

                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">

                            <g clip-path="url(#clip0_109_1323)">

                                <path d="M6.6248 18.1251C14.1701 18.1251 18.2982 11.8724 18.2982 6.45167C18.2982 6.27589 18.2943 6.0962 18.2865 5.92042C19.0896 5.33967 19.7826 4.62033 20.333 3.7962C19.5851 4.12896 18.791 4.34627 17.9779 4.44074C18.8341 3.92755 19.4751 3.12135 19.7822 2.17159C18.9768 2.64892 18.096 2.98563 17.1775 3.1673C16.5587 2.50976 15.7405 2.07439 14.8494 1.9285C13.9583 1.78261 13.044 1.93433 12.2478 2.3602C11.4516 2.78607 10.8178 3.46238 10.4445 4.28455C10.0713 5.10672 9.9792 6.02897 10.1826 6.9087C8.55175 6.82686 6.95629 6.40321 5.49966 5.6652C4.04303 4.9272 2.75775 3.89132 1.72715 2.62472C1.20334 3.52782 1.04305 4.59649 1.27887 5.61353C1.51468 6.63057 2.12889 7.51966 2.99668 8.10011C2.3452 8.07943 1.70799 7.90402 1.1377 7.58839V7.63917C1.13711 8.58691 1.46476 9.50561 2.06493 10.2391C2.66511 10.9726 3.50078 11.4756 4.42988 11.6626C3.82639 11.8277 3.19299 11.8518 2.57871 11.7329C2.84089 12.548 3.35099 13.2609 4.03782 13.7721C4.72465 14.2833 5.55394 14.5673 6.40996 14.5845C4.95669 15.726 3.16149 16.3452 1.31348 16.3423C0.985747 16.3418 0.65834 16.3217 0.333008 16.2821C2.21039 17.4866 4.39428 18.1263 6.6248 18.1251Z" fill="#333333"/>

                            </g>

                            <defs>

                                <clipPath id="clip0_109_1323">

                                    <rect width="20" height="20" fill="white" transform="translate(0.333008)"/>

                                </clipPath>

                            </defs>

                        </svg>

                    </a>

                    <a class="social_media_links" href="">

                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">

                            <g clip-path="url(#clip0_109_1326)">

                                <path d="M18.8525 0H1.80957C0.993164 0 0.333008 0.644531 0.333008 1.44141V18.5547C0.333008 19.3516 0.993164 20 1.80957 20H18.8525C19.6689 20 20.333 19.3516 20.333 18.5586V1.44141C20.333 0.644531 19.6689 0 18.8525 0ZM6.2666 17.043H3.29785V7.49609H6.2666V17.043ZM4.78223 6.19531C3.8291 6.19531 3.05957 5.42578 3.05957 4.47656C3.05957 3.52734 3.8291 2.75781 4.78223 2.75781C5.73145 2.75781 6.50098 3.52734 6.50098 4.47656C6.50098 5.42188 5.73145 6.19531 4.78223 6.19531ZM17.376 17.043H14.4111V12.4023C14.4111 11.2969 14.3916 9.87109 12.8682 9.87109C11.3252 9.87109 11.0908 11.0781 11.0908 12.3242V17.043H8.12988V7.49609H10.9736V8.80078H11.0127C11.4072 8.05078 12.376 7.25781 13.8174 7.25781C16.8213 7.25781 17.376 9.23438 17.376 11.8047V17.043Z" fill="#333333"/>

                            </g>

                            <defs>

                                <clipPath id="clip0_109_1326">

                                    <rect width="20" height="20" fill="white" transform="translate(0.333008)"/>

                                </clipPath>

                            </defs>

                        </svg>

                    </a>

                </div>

            </div>

        </div>

    </div>

    <div class="property">

        <p>© 2023 Omar-Khaled. All rights reserved.</p>

    </div>

`;

$(".footerJs").html(footer);

// === nav-bar-for-phone ===

let = navPhoneTimer = 1;

$(".navbar_phone").click(function(){

    navPhoneTimer++

    if(navPhoneTimer % 2 == 0){

        $(".bottom_span").css({"position":"absolute" , "transform":"translateY(100%)" , "opacity":"0"});

        $(".top_span").css({"position":"absolute" , "top":"50%" , "left":"0%" , "rotate":"45deg"});

        $(".middle_span").css({"position":"absolute" , "top":"50%" , "left":"0%" , "rotate":"-45deg"});

        $(".navbar_phone_content").css({"visibility":"visible" , "top":"100%" , "opacity":"1"});

    }
    else{

        $(".bottom_span").css({"position":"absolute" , "transform":"translateY(0%)" , "opacity":"1"});

        $(".top_span").css({"position":"absolute" , "top":"0%" , "left":"0%" , "rotate":"0deg"});

        $(".middle_span").css({"position":"absolute" , "top":"50%" , "left":"0%" , "rotate":"0deg" , "transform":"translate(0% , -50%)"});

        $(".navbar_phone_content").css({"visibility":"hidden" , "top":"80%" ,"opacity":"0"});

    }

});

// === benefits-cards ===

const benefitsData = [

    {

        id : 1 ,
        title : "Flexible Learning Schedule" ,
        details : "Fit your coursework around your existing commitments and obligations."

    } ,

    {

        id : 2 ,
        title : "Expert Instruction" ,
        details : "Learn from industry experts who have hands-on experience in design and development."

    } ,

    {

        id : 3 ,
        title : "Diverse Course Offerings" ,
        details : "Explore a wide range of design and development courses covering various topics."

    } ,

    {

        id : 4 ,
        title : "Updated Curriculum" ,
        details : "Access courses with up-to-date content reflecting the latest trends and industry practices."

    } ,

    {

        id : 5 ,
        title : "Practical Projects and Assignments" ,
        details : "Develop a portfolio showcasing your skills and abilities to potential employers."

    } ,

    {

        id : 6 ,
        title : "Interactive Learning Environment" ,
        details : "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding."

    }

];

let benefitsCount = 1;

for(let i = 0 ; i < benefitsData.length ; i++){

    const benefitsCard = `
    
        <div class="benefits_card">

            <div class="benefits_card_number">

                <span>0${benefitsCount++}</span>

            </div>

            <div class="benefits_card_explane">

                <h5>${benefitsData[i].title}</h5>

                <p>${benefitsData[i].details}</p>

            </div>

            <div class="benefits_card_btn">

                <a href="">

                    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">

                        <rect x="0.5" y="0.5" width="53" height="53" rx="5.5" fill="#FCFCFD"/>
                        <rect x="0.5" y="0.5" width="53" height="53" rx="5.5" stroke="#F1F1F3"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7856 33.2144C21.1663 33.5952 21.7837 33.5952 22.1644 33.2144L31.55 23.8289V31.225C31.55 31.7635 31.9865 32.2 32.525 32.2C33.0635 32.2 33.5 31.7635 33.5 31.225V21.475C33.5 20.9365 33.0635 20.5 32.525 20.5H22.775C22.2365 20.5 21.8 20.9365 21.8 21.475C21.8 22.0135 22.2365 22.45 22.775 22.45H30.1711L20.7856 31.8356C20.4048 32.2163 20.4048 32.8337 20.7856 33.2144Z" fill="#FF9500"/>

                    </svg>

                </a>

            </div>

        </div>

    `;

    $(".benefits_cards_container").append(benefitsCard);

}

// === our-courses-cards ===

const ourCoursesData = [

    {

        id : 1 ,
        img : "images/course_1.jpeg" , 
        time : "4 Weeks" ,
        requirements : "Beginner" ,
        creator : "By John Smith" ,
        courseName : "Web Design Fundamentals" ,
        details : "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites." ,

    },

    {

        id : 2 ,
        img : "images/course_2.jpeg" , 
        time : "6 Weeks" ,
        requirements : "Intermediate" ,
        creator : "By Emily Johnson" ,
        courseName : "UI/UX Design" ,
        details : "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques." ,

    },

    {

        id : 3 ,
        img : "images/course_3.jpeg" , 
        time : "8 Weeks" ,
        requirements : "Intermediate" ,
        creator : "By David Brown" ,
        courseName : "Mobile App Development" ,
        details : "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin." ,

    },

    {

        id : 4 ,
        img : "images/course_4.png" , 
        time : "10 Weeks" ,
        requirements : "Beginner" ,
        creator : "By Sarah Thompson" ,
        courseName : "Graphic Design for Beginners" ,
        details : "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media." ,

    },

    {

        id : 5 ,
        img : "images/course_5.png" , 
        time : "10 Weeks" ,
        requirements : "Intermediate" ,
        creator : "By Michael Adams" ,
        courseName : "Front-End Web Development" ,
        details : "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites." ,

    },

    {

        id : 6 ,
        img : "images/course_6.png" , 
        time : "6 Weeks" ,
        requirements : "Advance" ,
        creator : "By Jennifer Wilson" ,
        courseName : "Advanced JavaScript" ,
        details : "Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence." ,

    }

];

for(let i = 0 ; i < ourCoursesData.length ; i++){

    const ourCoursesCard = `
    
        <div class="our_courses_cards">

            <div class="our_courses_img">

                <img src="${ourCoursesData[i].img}" alt="">

            </div>

            <div class="our_courses_details">

                <div class="time_creator">

                    <div class="time_requirements">

                        <span>${ourCoursesData[i].time}</span>

                        <span>${ourCoursesData[i].requirements}</span>

                    </div>

                    <p>${ourCoursesData[i].creator}</p>

                </div>

                <div class="course_details">

                    <h3>${ourCoursesData[i].courseName}</h3>

                    <p>

                    ${ourCoursesData[i].details}

                    </p>

                </div>

            </div>

            <div class="our_courses_git">

                <a href="">Get it Now</a>

            </div>

        </div>

    `;

    $(".our_courses_cards_container").append(ourCoursesCard);

}

// === testimonials-cards ===

const testimonialsData = [

    {

        id : 1 ,
        about : "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!" ,
        img : "images/testimonials_1.png" ,
        testimonialsName : "Sarah L"

    } ,

    {

        id : 2 ,
        about : "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!" ,
        img : "images/testimonials_2.png" ,
        testimonialsName : "Jason M"

    } ,

    {

        id : 3 ,
        about : "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!" ,
        img : "images/testimonials_3.png" ,
        testimonialsName : "Emily R"

    } ,

    {

        id : 4 ,
        about : "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!" ,
        img : "images/testimonials_4.png" ,
        testimonialsName : "Michael K"

    } ,

];

for(let i = 0 ; i < testimonialsData.length ; i++){

    const testimonialsCards = `
    
        <div class="testimonials_card">

            <div class="about_testimonials">

                <p>

                    ${testimonialsData[i].about}

                </p>

            </div>

            <div class="img_read_more">

                <div class="testimonials_img_name">

                    <div class="testimonials_img">

                        <img src="${testimonialsData[i].img}" alt="">

                    </div>

                    <p>${testimonialsData[i].testimonialsName}</p>

                </div>

                <a href="">Read Full Story</a>

            </div>

        </div>

    `;

    $(".testimonials_cards_container").append(testimonialsCards);

}

// === pricing-plane ===

$(".yearly").click(function(){

    $(".pricing_time .bg_plane").css({"left":"calc(104px + 12px)"});

    $(this).css({"color":"#FFFFFF"});

    $(".monthly").css({"color":"#4C4C4D"});

});

$(".monthly").click(function(){

    $(".pricing_time .bg_plane").css({"left":"12px"});

    $(this).css({"color":"#FFFFFF"});

    $(".yearly").css({"color":"#4C4C4D"});

});

// === courses-page-content

const coursesData = [

    {

        id : 1 ,
        title : "Web Design Fundamentals" ,
        details : "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites." ,
        images : ["images/course_1.jpeg" , "images/course_det_1.png" , "images/course_1(3).png"] ,
        time : "4 Weeks" ,
        requirements : "Beginner" ,
        creator : "By John Smith" ,
        curriculum : ["Introduction to HTML" , "Styling with CSS" , "Introduction to Responsive Design" , "Design Principles for Web" , "Building a Basic Website"]

    } ,

    {

        id : 2 ,
        title : "UI/UX Design" ,
        details : "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques." ,
        images : ["images/course_2.jpeg" , "images/course_2(2).png" , "images/course_2(3).png"] ,
        time : "6 Weeks" ,
        requirements : "Intermediate" ,
        creator : "By Emily Johnson" ,
        curriculum : ["Introduction to UI/UX Design" , "User Research and Personas" , "Wireframing and Prototyping" , "Visual Design and Branding" , "Usability Testing and Iteration"]

    } ,

    {

        id : 3 ,
        title : "Mobile App Development" ,
        details : "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin." ,
        images : ["images/course_3.jpeg" , "images/course_3(2).jpeg" , "images/course_3(3).jpeg"] ,
        time : "8 Weeks" ,
        requirements : "Intermediate" ,
        creator : "By David Brown" ,
        curriculum : ["Introduction to Mobile App Development" , "Fundamentals of Swift Programming (iOS)" , "Fundamentals of Kotlin Programming (Android)" , "Building User Interfaces" , "App Deployment and Testing"]

    } ,

    {

        id : 4 ,
        title : "Graphic Design for Beginners" ,
        details : "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media." ,
        images : ["images/course_4.png" , "images/course_4(2).jpeg" , "images/course_4(3).jpeg"] ,
        time : "10 Weeks" ,
        requirements : "Beginner" ,
        creator : "By Sarah Thompson" ,
        curriculum : ["Introduction to Graphic Design" , "Typography and Color Theory" , "Layout Design and Composition" , "Image Editing and Manipulation" , "Designing for Print and Digital Media"]

    } ,

    {

        id : 5 ,
        title : "Front-End Web Development" ,
        details : "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites." ,
        images : ["images/course_5.png" , "images/course_5(2).jpg" , "images/course_5(3).png"] ,
        time : "10 Weeks" ,
        requirements : "Intermediate" ,
        creator : "By Michael Adams" ,
        curriculum : ["HTML Fundamentals" , "CSS Styling and Layouts" , "JavaScript Basics" , "Building Responsive Websites" , "Introduction to Bootstrap and React"]

    }


]

let curriculumCount = 1;

for(let i = 0 ; i < coursesData.length ; i++){

    var coursesTitle = `
    
        <h4> ${coursesData[i].title} </h4>

        <p>

            ${coursesData[i].details}

        </p>

    `;

    var coursesTimeAndCreator = `
    
        <div class="time_requirements">

            <span>${coursesData[i].time}</span>

            <span>${coursesData[i].requirements}</span>

        </div>

        <p>${coursesData[i].creator}</p>

    `;

    for(let j = 0 ; j < coursesData[i].images.length ; j++){

        var coursesImages = `
        
            <img src=" ${coursesData[i].images[j]} " alt="">

        `;

        if(j == 0){

            var images = coursesImages

        }
        else{

            images = images+coursesImages;

        }

    }

    for(let k = 0 ; k < coursesData[i].curriculum.length ; k++){

        var corsesCurriculum = `
        
            <div class="curriculum_card">

                <h3>0${curriculumCount++} </h3>

                <p> ${coursesData[i].curriculum[k]} </p>

            </div>

        `;

        if(k == 0){

            var curriculum = corsesCurriculum

        }
        else{

            curriculum = curriculum+corsesCurriculum;

        }

        if(curriculumCount === 6){

            curriculumCount = 1

        }

    }

    const coursesCard = `
    
        <div class="courses_card">

            <div class="courses_card_details">

                <div class="courses_card_content">

                    <div class="courses_card_content_details">

                        ${coursesTitle}

                    </div>

                    <a href="">View Course</a>

                </div>

                <div class="courses_card_images">

                    ${images}

                </div>

                <div class="courses_card_time_requirements">

                    <div class="time_creator">

                        ${coursesTimeAndCreator}

                    </div>

                </div>

            </div>

            <div class="courses_card_curriculum">

                <div class="curriculum_title">

                    <p>Curriculum</p>

                </div>

                <div class="curriculum_container">

                    ${curriculum}

                </div>

            </div>

        </div>


    `;

    $(".courses_cards_container").append(coursesCard);

}