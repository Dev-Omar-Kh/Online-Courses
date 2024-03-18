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
                <li class="about"><a href="about.html">About Us</a></li>
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

// === courses-page-content ===

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

// === about-us-content ===

const aboutData = [

    {

        id : 1 ,
        title : "Achievements" ,
        explain : "Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements" ,
        icon: [

            `

                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">

                    <path d="M4.67212 20.6668L4.99961 21.9918C5.41442 23.7143 6.32047 24.5977 8.12164 24.5977H19.8783C21.6905 24.5977 22.5856 23.7364 23.0113 21.9918L23.3388 20.6668H4.67212ZM4.31189 19.154H23.7099L25.7621 10.6519L24.867 10.133L19.8347 13.843C19.4635 14.108 19.2125 14.0086 19.005 13.7105L14.2674 6.46711L13.7435 6.44503L8.96218 13.7436C8.77661 14.0307 8.55828 14.1191 8.18713 13.854L3.25302 10.2103L2.20507 10.4863L4.31189 19.154ZM2.60897 12.8602C4.04991 12.8602 5.20701 11.6788 5.20701 10.2103C5.20701 8.77484 4.04991 7.58232 2.60897 7.58232C1.16803 7.58232 0 8.76379 0 10.2103C0 11.6788 1.17894 12.8602 2.60897 12.8602ZM14.0055 8.26691C15.4355 8.26691 16.6035 7.08545 16.6035 5.62793C16.6035 4.1925 15.4355 3 14.0055 3C12.5536 3 11.3965 4.18147 11.3965 5.62793C11.3965 7.08545 12.5645 8.26691 14.0055 8.26691ZM25.391 12.8602C26.8211 12.8602 28 11.6788 28 10.2103C28 8.76379 26.832 7.58232 25.391 7.58232C23.961 7.58232 22.793 8.77484 22.793 10.2103C22.793 11.6788 23.961 12.8602 25.391 12.8602Z" fill="#FF9500"/>

                </svg>

            ` ,

            `

                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">

                    <path d="M14.148 27.4375C18.273 27.4375 21.6011 24.1094 21.6011 19.9961C21.6011 15.8711 18.273 12.543 14.148 12.543C10.0347 12.543 6.70657 15.8711 6.70657 19.9961C6.70657 24.1094 10.0347 27.4375 14.148 27.4375ZM12.0269 23.8281C11.5816 24.1562 11.1128 23.8164 11.2886 23.3008L12.1323 20.7812L9.9761 19.2461C9.56595 18.9414 9.69485 18.3672 10.2573 18.3672L12.9058 18.3906L13.7144 15.8594C13.8784 15.3438 14.4409 15.3438 14.605 15.8594L15.4136 18.3906L18.062 18.3672C18.6245 18.3672 18.7417 18.9531 18.3433 19.2344L16.187 20.7812L17.0308 23.3008C17.2066 23.8164 16.7378 24.1562 16.2925 23.8281L14.1597 22.2695L12.0269 23.8281ZM7.01126 14.418C8.1597 12.9648 9.74173 11.8633 11.5581 11.3242L6.24954 1.78516L3.16751 6.48438C2.95657 6.78906 2.94485 7.12891 3.13235 7.43359L7.01126 14.418ZM11.523 7.32812H16.7847L20.3589 1H7.94876L11.523 7.32812ZM16.7495 11.3242C18.5777 11.8633 20.148 12.9648 21.2964 14.418L25.187 7.43359C25.3628 7.12891 25.3511 6.78906 25.1402 6.48438L22.0581 1.78516L16.7495 11.3242Z" fill="#FF9500"/>

                </svg>

            ` ,

            `

                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">

                    <path d="M10.5393 20.9684C14.5075 19.8763 16.2058 16.7396 15.087 12.5109L13.5818 6.763C13.1713 5.21928 12.1733 4.66092 10.6359 5.07148L2.65938 7.23104C1.11397 7.65802 0.542495 8.64337 0.952994 10.2199L2.4501 15.9595C3.55281 20.1802 6.57118 22.0523 10.5393 20.9684ZM9.78276 18.0288C8.10047 18.4722 6.46655 17.8892 5.6053 16.4933C5.43628 16.2388 5.58116 15.9842 5.90312 16.0089C6.97363 16.0992 8.24539 15.9103 9.16295 15.6558C10.0644 15.4176 11.2396 14.9414 12.133 14.3091C12.3986 14.112 12.6643 14.2516 12.6481 14.5883C12.5918 16.2306 11.473 17.5526 9.78276 18.0288ZM5.72605 12.6341C5.12237 12.8064 5.04188 13.217 4.78431 13.2581C4.66358 13.2827 4.51869 13.1431 4.44625 12.905C4.25307 12.2071 4.68773 11.4598 5.37994 11.2874C6.0802 11.115 6.79656 11.5337 6.97363 12.2071C7.04608 12.4534 6.98168 12.6423 6.8529 12.6915C6.55509 12.7982 6.27337 12.4862 5.72605 12.6341ZM10.6359 11.2792C10.0322 11.4598 9.95173 11.8622 9.69416 11.895C9.57348 11.9196 9.42856 11.7801 9.35616 11.5501C9.16295 10.8604 9.59759 10.105 10.2898 9.93253C10.9981 9.74368 11.7064 10.1707 11.8835 10.8522C11.9559 11.1067 11.8916 11.2874 11.7628 11.3367C11.473 11.4434 11.1832 11.1232 10.6359 11.2792ZM26.1544 9.35774L18.1859 7.18177C16.7692 6.79584 15.7712 7.22283 15.3606 8.50377L15.2641 8.85686L16.1495 12.2235C17.0348 15.5819 16.3105 18.423 14.2499 20.2623C15.0387 21.5925 16.4393 22.5861 18.2905 23.0869C22.2426 24.1626 25.2449 22.2904 26.3556 18.0699L27.8769 12.3384C28.2793 10.7865 27.6998 9.77652 26.1544 9.35774ZM18.041 14.3337C17.4856 14.1942 17.1556 13.6194 17.3085 13.0364C17.4614 12.4698 18.0249 12.1331 18.5802 12.2892C19.1356 12.4452 19.4657 13.0282 19.3208 13.5947C19.1678 14.1613 18.6044 14.4898 18.041 14.3337ZM22.7657 15.6229C22.2184 15.4751 21.8884 14.8921 22.0413 14.3173C22.1862 13.7508 22.7497 13.4223 23.3051 13.5783C23.8685 13.7179 24.1904 14.3009 24.0455 14.8757C23.8926 15.4423 23.3292 15.7789 22.7657 15.6229ZM19.3771 18.776C18.5401 18.5379 17.7351 18.5297 16.7049 18.7596C16.3829 18.8335 16.1897 18.5625 16.3588 18.2916C17.051 17.183 18.4515 16.7232 19.8118 17.1092C21.2203 17.4704 22.1782 18.5707 22.2264 19.8845C22.2426 20.213 21.9448 20.3526 21.7033 20.1309C20.9065 19.3919 20.2223 18.9977 19.3771 18.776Z" fill="#FF9500"/>

                </svg>

            ` ,

            `

                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">

                <path d="M13.5859 25.6602C13.7734 25.6602 14.0664 25.5898 14.3594 25.4375C21.0273 21.9453 23.1719 20.1992 23.1719 15.9922V7.15625C23.1719 5.94922 22.6562 5.5625 21.6719 5.15234C20.3008 4.58984 15.918 2.99609 14.5586 2.52734C14.2422 2.42188 13.9141 2.36328 13.5859 2.36328C13.2578 2.36328 12.9297 2.43359 12.625 2.52734C11.2539 2.97266 6.87109 4.60156 5.5 5.15234C4.52734 5.55078 4 5.94922 4 7.15625V15.9922C4 20.1992 6.26172 21.7461 12.8125 25.4375C13.1172 25.6016 13.3984 25.6602 13.5859 25.6602ZM8.30078 14.3984C8.30078 14.2578 8.37109 14.082 8.5 13.9297L15.1211 5.62109C15.625 4.98828 16.4688 5.41016 16.1641 6.19531L13.9844 12.0547H18.0742C18.3906 12.0547 18.625 12.2773 18.625 12.5938C18.625 12.7344 18.5547 12.9102 18.4258 13.0625L11.8047 21.3711C11.3008 22.0039 10.4688 21.582 10.7617 20.8086L12.9531 14.9375H8.85156C8.54688 14.9375 8.30078 14.7148 8.30078 14.3984Z" fill="#FF9500"/>

                </svg>

            `

        ] ,
        h4 : [

            "Trusted by Thousands" ,
            "Award-Winning Courses" ,
            "Positive Student Feedback" ,
            "Industry Partnerships"

        ] ,
        p : [

            "We have successfully served thousands of students, helping them unlock their potential and achieve their career goals." ,
            "Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies." ,
            "We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials." ,
            "We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies"

        ] ,

    } ,

    {

        id : 1 ,
        title : "Our Goals" ,
        explain : "At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact.Through our carefully crafted courses, we aim to" ,
        icon: [

            `

                <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">

                    <path d="M10.6573 27.8559H17.3427C21.1504 27.8559 23.0325 25.9011 22.9996 21.9915C22.9558 17.5266 22.934 14.2834 22.8246 11.851C22.5073 4.69819 20.5268 2.599 14.0055 2.599C7.4842 2.599 5.4928 4.69819 5.17549 11.851C5.06607 14.2834 5.04419 17.5266 5.00042 21.9915C4.9676 25.9011 6.84958 27.8559 10.6573 27.8559ZM10.34 23.4466C9.39901 23.4466 8.79722 22.8245 8.79722 21.8916V16.1605C8.79722 15.2164 9.39901 14.5944 10.34 14.5944H17.671C18.6011 14.5944 19.2028 15.2164 19.2028 16.1605V21.8916C19.2028 22.8245 18.6011 23.4466 17.671 23.4466H10.34ZM8.79722 18.8706H19.2028V17.5488H8.79722V18.8706ZM14.0055 0C11.9047 0 10.4275 1.44389 10.4275 3.4098H11.9703C11.9703 2.33244 12.8019 1.56606 14.0055 1.56606C15.1981 1.56606 16.0407 2.33244 16.0407 3.4098H17.5834C17.5834 1.44389 16.0954 0 14.0055 0Z" fill="#FF9500"/>

                </svg>

            ` ,

            `

                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">

                    <path d="M7.59766 26.1133H22.7734C23.2891 26.1133 23.7109 25.7031 23.7109 25.1758C23.7109 24.7656 23.4297 24.4023 23.0547 24.2734C21.5781 23.6875 21.2734 21.7773 22.7266 20.3125C23.1719 19.8672 23.7109 19.293 23.7109 18.1211V4.67969C23.7109 2.24219 22.5039 1 20.0781 1H7.63281C5.20703 1 4 2.23047 4 4.67969V22.4922C4 24.9062 5.21875 26.1133 7.59766 26.1133ZM7.70312 24.2266C6.51953 24.2266 5.88672 23.5938 5.88672 22.4805C5.88672 21.4258 6.63672 20.7461 7.80859 20.7461H19.832C19.9844 20.7461 20.125 20.7344 20.2422 20.7109C19.6914 21.9297 19.7852 23.2188 20.4062 24.2266H7.70312ZM7.35156 18.9648C6.98828 18.9648 6.68359 18.6602 6.68359 18.2852V3.48438C6.68359 3.10938 6.98828 2.81641 7.35156 2.81641C7.71484 2.81641 8.03125 3.10938 8.03125 3.48438V18.2852C8.03125 18.6602 7.71484 18.9648 7.35156 18.9648Z" fill="#FF9500"/>

                </svg>

            ` ,

            `

                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">

                    <path d="M0 14.4852C0 16.4946 1.39227 17.5977 2.95857 17.5977C3.61602 17.5977 4.10912 17.4105 4.69889 17.0363C5.25 16.6916 5.64641 16.8983 5.64641 17.381V21.0254C5.64641 22.9658 6.65193 23.9606 8.57594 23.9606H11.1574C11.6215 23.9606 11.8246 23.5666 11.4959 23.0052C11.1188 22.4043 10.9351 21.902 10.9351 21.2322C10.9351 19.6366 12.0276 18.2183 14 18.2183C15.9724 18.2183 17.0553 19.6366 17.0553 21.2322C17.0553 21.902 16.8715 22.4043 16.5041 23.0052C16.1754 23.5666 16.3687 23.9606 16.8426 23.9606H19.4241C21.3481 23.9606 22.3536 22.9658 22.3536 21.0254V17.381C22.3536 16.8983 22.75 16.6916 23.2915 17.0363C23.8909 17.4105 24.384 17.5977 25.0317 17.5977C26.6077 17.5977 28 16.4946 28 14.4852C28 12.466 26.6077 11.3629 25.0317 11.3629C24.384 11.3629 23.8909 11.55 23.2915 11.9243C22.75 12.269 22.3536 12.0622 22.3536 11.5796V7.9352C22.3536 6.00466 21.3481 5 19.4241 5H16.8426C16.3687 5 16.1754 5.40384 16.5041 5.96527C16.8715 6.56609 17.0553 7.06843 17.0553 7.7382C17.0553 9.33385 15.9724 10.7522 14 10.7522C12.0276 10.7522 10.9351 9.33385 10.9351 7.7382C10.9351 7.06843 11.1188 6.56609 11.4959 5.96527C11.8246 5.40384 11.6215 5 11.1574 5H8.57594C6.65193 5 5.64641 6.00466 5.64641 7.9352V11.5796C5.64641 12.0622 5.25 12.269 4.69889 11.9243C4.10912 11.55 3.61602 11.3629 2.95857 11.3629C1.39227 11.3629 0 12.466 0 14.4852Z" fill="#FF9500"/>

                </svg>

            ` ,

            `

                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">

                    <path d="M22.8633 24.707C23.3906 24.707 23.8242 24.2852 23.8242 23.7695C23.8242 23.2422 23.3906 22.8086 22.8633 22.8086H21.4336V15.0391C21.4336 10.7617 18.1406 7.45703 13.8633 7.45703C9.59766 7.45703 6.30469 10.7617 6.30469 15.0391V22.8086H4.85156C4.33594 22.8086 3.92578 23.2422 3.92578 23.7695C3.92578 24.2852 4.33594 24.707 4.85156 24.707H22.8633ZM14.8477 15.0742V22.8086H12.9023V15.0742C12.9023 14.5352 13.3242 14.0898 13.8633 14.0898C14.4023 14.0898 14.8477 14.5352 14.8477 15.0742ZM3.24609 15.8828C3.79688 15.8828 4.27734 15.4258 4.27734 14.8867C4.27734 14.3242 3.79688 13.8672 3.24609 13.8672H0.996094C0.457031 13.8672 0 14.3359 0 14.8867C0 15.4141 0.457031 15.8828 0.996094 15.8828H3.24609ZM5.64844 8.08984C6.03516 8.47656 6.67969 8.48828 7.06641 8.08984C7.46484 7.69141 7.45312 7.05859 7.06641 6.67188L5.48438 5.07812C5.10938 4.67969 4.45312 4.67969 4.05469 5.07812C3.66797 5.47656 3.66797 6.09766 4.05469 6.49609L5.64844 8.08984ZM12.8555 4.26953C12.8555 4.82031 13.3125 5.28906 13.8633 5.28906C14.4258 5.28906 14.8828 4.82031 14.8828 4.26953V2.01953C14.8828 1.46875 14.4141 1 13.8633 1C13.3125 1 12.8555 1.46875 12.8555 2.01953V4.26953ZM20.6484 6.67188C20.2617 7.05859 20.25 7.69141 20.6484 8.08984C21.0586 8.48828 21.6797 8.47656 22.0664 8.08984L23.6719 6.49609C24.0586 6.09766 24.0586 5.47656 23.6719 5.07812C23.2617 4.67969 22.6406 4.67969 22.2539 5.07812L20.6484 6.67188ZM26.7188 15.8828C27.2695 15.8828 27.7383 15.4141 27.7383 14.8867C27.7383 14.3359 27.2695 13.8672 26.7188 13.8672H24.4688C23.9297 13.8672 23.4609 14.3242 23.4609 14.8867C23.4609 15.4258 23.9297 15.8828 24.4688 15.8828H26.7188Z" fill="#FF9500"/>

                </svg>

            `

        ] ,
        h4 : [

            "Provide Practical Skills" ,
            "Foster Creative Problem-Solving" ,
            "Promote Collaboration and Community" ,
            "Stay Ahead of the Curve"

        ] ,
        p : [

            "We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field." ,
            "We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation." ,
            "We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together." ,
            "The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills."

        ] ,

    }

];

for(let i = 0 ; i < aboutData.length ; i++){

    var aboutTitle = `
    
        <h3> ${aboutData[i].title} </h3>

        <p>${aboutData[i].explain}</p>

    `;

    for(let j = 0 ; j < aboutData[i].icon.length ; j++){

        var aboutCard = `
        
            <div class="achievements_goals_card">

                <div class="card_icon">

                    ${aboutData[i].icon[j]}

                </div>

                <h4>${aboutData[i].h4[j]}</h4>

                <p>${aboutData[i].p[j]}</p>

            </div>

        `;

        if(j == 0){

            var iconAndData = aboutCard

        }
        else{

            iconAndData = iconAndData+aboutCard;

        }

    }

    const aboutCardContainer = `
    
        <div class="achievements_goals">

            <div class="achievements_goals_title">

                ${aboutTitle}

            </div>

            <div class="achievements_goals_cards_container">

                ${iconAndData}

            </div>

        </div>

    `;

    $(".achievements_goals_container").append(aboutCardContainer);

}