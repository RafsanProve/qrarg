import Navbar from "../components/Navbar";
import MeetTheExperts from "../components/expertise/MeetTheExperts";
import ExpertCardLeft from "../components/expertise/ExpertCardLeft";
import ExpertCardRight from "../components/expertise/ExpertCardRight";
import Footer from "../components/Footer";
import {Roboto_Condensed} from "next/font/google";

const roboto = Roboto_Condensed({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={roboto.className}>
    <Navbar />
    <div className="bg-zinc-800 w-full h-16"></div>
    <MeetTheExperts />
    <ExpertCardLeft
    name={"Dr. Md Akhtaruzzaman"}
    position={"Assist. Professor & Researcher (Robotics & Mechatronics)"}
    imageSrc={"/images/Akhtaruzzaman.jpg"}
    imageAlt={"Dr. Md Akhtaruzzaman"}
    description={"Dr. Md. Akhtaruzzaman is an Assistant Professor in the Department of Computer Science & Engineering at MIST, specializing in Robotics and Mechatronics. He holds a Ph.D. in Engineering (Mechatronics/Robotics) from IIUM, Malaysia, and has extensive academic and research experience, including serving as a Web Consultant for MIJST and NDC Journals. With prior roles as a Research Assistant in Malaysia and a Software Engineer in Bangladesh, he has contributed significantly to his field, publishing 16 journal articles, 24 conference papers, 2 international book chapters, and 2 books. His achievements include multiple awards such as the Academic Achievement Award (Ph.D.), IIUM Postgraduate Assistantship Scholarship, and Gold Medals at KERIE 2013 and IRIIE 2012. He is an affiliate member of the IEEE Robotics and Automation Society and has actively contributed to various conferences. Dr. Akhtaruzzaman’s expertise and contributions continue to enrich the academic and research landscape at MIST."}
    email={"akhter900@cse.mist.ac.bd"}
    linkedin={"https://www.linkedin.com/in/md-akhtaruzzaman-6b148b55/"}
    // researchgate={"https://www.researchgate.net/profile/Md-Akhtaruzzaman-2"}
    googleScholar={"https://scholar.google.com/citations?hl=en&user=gXpfPFIAAAAJ"}
    phone={"+8801754823989"}
    />
    <ExpertCardRight
    name={"Dr. Md Towfiqur Rahman"}
    position={"Assistant Professor"}
    imageSrc={"/images/Dr_Towfiq.jpg"}
    imageAlt={"Dr. Md Towfiqur Rahman"}
    description={"Dr. Muhammad Towfiqur Rahman is an Assistant Professor in the Department of Computer Science and Engineering at the University of Asia Pacific (UAP), Dhaka, Bangladesh.e earned his Ph.D. in Electrical Engineering, focusing on Visible Light Communication, from Monash University, Australia.e also holds a Master of Science in Communication Engineering from the International Islamic University Malaysia and an MBA from the International Islamic University Chittagong, Bangladesh.efore joining UAP in August 2021, Dr. Rahman served as an Adjunct Faculty member in the Department of Electrical and Electronic Engineering at Northern University Bangladesh and as a Teaching Staff in Electrical Engineering at Monash University.is research interests include 5G-enabled Visible Light Communication Technology, Optical OFDM, and hybrid communication systems.r. Rahman has supervised numerous theses at both undergraduate and graduate levels, contributing significantly to advancements in optical and wireless communication technologies."}
    email={"towfiq@uap-bd.edu"}
    linkedin={"https://www.linkedin.com/in/muhammad-towfiqur-rahman-59813267/"}
    // researchgate={"https://www.researchgate.net/profile/Towfiqur-Rahman-3"}
    googleScholar={"https://scholar.google.com/citations?user=D8X5KU0AAAAJ&hl=en"}
    orcid={"https://orcid.org/0000-0001-5937-2368"}
    phone={"+8801886922110"}
    />
    <ExpertCardLeft
    name={"Dr. Hosney Jahan"}
    position={"Assistant Professor"}
    imageSrc={"/images/jahan.jpg"}
    imageAlt={"Dr. Hosney Jahan"}
    description={"Dr. Hosney Jahan is an Assistant Professor in the Department of Computer Science & Engineering at the Military Institute of Science and Technology (MIST), Dhaka, Bangladesh.he earned her Ph.D. in Computer Science and Technology from Sichuan University, China, and her M.Sc. in Computer Software and Theory from Nanjing University of Science and Technology, China.er research interests include Software Engineering, Software Testing, Machine Learning, and Formal Methods.r. Jahan has published in various reputable journals and conferences, contributing to advancements in her field.he has also been involved in research projects focusing on software test case prioritization using artificial neural networks and drug-target interaction prediction using machine learning techniques.rior to her current role, she gained experience as a Research and Teaching Assistant at Sichuan University and worked as a Software Quality Assurance Engineer in Bangladesh.r. Jahan has been recognized with several awards, including the Chinese Government Scholarship for her Ph.D. studies."}
    email={"jahan@cse.mist.ac.bd"}
    // facebook={"https://www.facebook.com/nitu.h.jahan"}
    linkedin={"https://www.linkedin.com/in/dr-hosney-jahan-7a1325277/"}
    // whatsapp={"https://www.whatsapp.com"}
    researchgate={"https://www.researchgate.net/profile/Hosney-Jahan"}
    googleScholar={"https://scholar.google.com/citations?hl=en&user=k5q8YvUAAAAJ"}
    phone={"+8801782301086"}
    />
    <ExpertCardRight
    name={"Dr. Naveed Quadri"}
    position={"Professor"}
    imageSrc={"/images/qnaveed.jpg"}
    imageAlt={"Dr. Naveed Quadri"}
    description={"Quadri Noorulhasan Naveed is Doctorate in Information Technology from IIUM, Malaysia and with an academic experience of 15+ years. The vast experience covers Teaching, Research, Academic paper publications, Academic Development Contributions and participations in Training Seminars, Workshops, Policy implementation, Quality Assurance and Liaoning for research funding support. Presently he is faculty of Computer Science & IT at the College of Computer Science in the King Khalid University of Saudi Arabia."}
    email={""}
    // facebook={"https://www.facebook.com"}
    linkedin={"https://www.linkedin.com/in/naveed-quadri/"}
    // whatsapp={"https://www.whatsapp.com"}
    researchgate={"https://www.researchgate.net/profile/Noorulhasan-Naveed-Quadri"}
    googleScholar={"https://scholar.google.co.in/citations?hl=en&authuser=1&user=e_sFkkoAAAAJ"}
    scopus={"https://www.scopus.com/authid/detail.uri?authorId=57205095985"}
    orcid={"https://orcid.org/0000-0003-2757-4138"}
    // phone={"+966540010010"}
    />
    <ExpertCardLeft
    name={"Prof. Madya Dr. Mohammad Kamrul Hasan"}
    position={"Professor"}
    imageSrc={"/images/Kamrul.jpg"}
    imageAlt={"Prof. Madya Dr. Mohammad Kamrul Hasan"}
    description={"Mohammad Kamrul Hasan currently an Associate Professor and Head of the Network and Communication Technology Research Lab with the Center for Cyber Security, Universiti Kebangsaan Malaysia. He completed his Doctor of Philosophy degree in electrical and communication engineering from the Faculty of Engineering, International Islamic University, Malaysia, in 2016. Prior to that, he earned an M.Sc. in Communication Engineering from the Department of Electrical and Computer Engineering, International Islamic University, Malaysia, in 2012. He has been awarded the gold medal for his research work and many achievements, including the young scientist award and Full Bright scholarship sponsored by the Ministry of Higher Education Malaysia. Dr. Kamrul has been a Senior Member of the Institute of Electrical and Electronics Engineers since 2013. Before starting the doctoral study, Dr. Kamrul served the related industry for ten (10) years in the area of computer networks and security, communication systems and networks, Wide Area Network design/planning using PLC, PMU, SCADA Wide Area Measurement System. His research interest in cutting-edge information-centric networks, computer networks, data communication and security, mobile network and privacy protection, cyber-physical systems, the Industrial IoT, transparent AI, Smart grid networks and applications, and electric vehicle networks. He has published over 250 indexed papers in ranked journals and conference proceedings."}
    email={"mkhasan@ukm.edu.my"}
    linkedin={"https://www.linkedin.com/in/kamrul-hasan-61613110/"}
    researchgate={"https://www.researchgate.net/profile/Mohammad-Kamrul-Hasan-5"}
    googleScholar={"https://scholar.google.com/citations?user=hasankamrul@ieee.org"}
    phone={"+8801714121656"}
    />
    <ExpertCardRight
    name={"Dr. Shugata Ahmed"}
    position={"Assistant Professor"}
    imageSrc={"/images/Shugata.jpg"}
    imageAlt={"Dr. Shugata Ahmed"}
    description={"Dr. Shugata Ahmed is an Assistant Professor (currently on leave) in the Department of Robotics and Mechatronics Engineering at the University of Dhaka.e earned his Ph.D. in Engineering from the International Islamic University Malaysia in 2017, a Master's in Information Technology and Mechatronics of Vehicles from the University of Ulsan, South Korea, in 2013, and a Bachelor's in Mechanical Engineering from the Chittagong University of Engineering and Technology in 2010.is research focuses on the properties of smart materials, such as magnetorheological fluids, and the development of sensors and actuators, particularly microelectromechanical systems (MEMS) for sensing various parameters like position, displacement, velocity, and temperature.r. Ahmed has been involved in projects including the design and fabrication of an infrared camera-based docking system for autonomous underwater vehicles and 3D image reconstruction from monocular vision for mobile robot navigation."}
    email={"shugataahmed@gmail.com"}
    // researchgate={"https://www.researchgate.net/profile/Towfiqur-Rahman-3"}
    googleScholar={"https://scholar.google.com/citations?hl=en&user=c8su2vYAAAAJ&view_op=list_works&sortby=pubdate"}
    phone={"+8801975442514"}
    />
    <ExpertCardLeft
    name={"Dr. S.M. Sadakatul Bari"}
    position={"Assistant Professor, Chairman"}
    imageSrc={"/images/Sadakatul.jpg"}
    imageAlt={"Dr. Md. Shafiqul Islam"}
    description={"Dr. S.M. Sadakatul Bari is an Assistant Professor and Chairman of the Department of Aircraft Maintenance Engineering (Avionics) at Bangabandhu Sheikh Mujibur Rahman Aviation and Aerospace University (BSMRAAU), Dhaka, Bangladesh.e earned his Ph.D. in Engineering in 2017 and his M.Sc. in Computer and Information Engineering in 2013, both from the International Islamic University Malaysia (IIUM).e completed his B.Sc. in Computer Science and Engineering from Chittagong University of Engineering and Technology (CUET), Bangladesh, in 2006.r. Bari's research interests include Satellite Communication and Remote Sensing, Computer Vision and Image Processing, Wireless Communication and Network Protocols (TCP/IP), and Sensor Networks.efore joining BSMRAAU in December 2021, he served as an Assistant Professor in the Department of Computer Science and Engineering at the Bangladesh Army University of Science and Technology (BAUST) and the Bangladesh Army International University of Science and Technology (BAIUST).is notable publications include research on convolutional neural network-based object detection models for Bangladeshi traffic vehicles and link budget analysis for military X-band satellite communication."}
    email={"sms_bari@bsmraau.edu.bd"}
    // researchgate={"https://www.researchgate.net/profile/Towfiqur-Rahman-3"}
    googleScholar={"https://scholar.google.com/citations?hl=en&user=c8su2vYAAAAJ&view_op=list_works&sortby=pubdate"}
    phone={"+8801737942409"}
    />
    <Footer />
    </main>
  );
}
