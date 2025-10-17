import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Translation data
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.faq': 'FAQ',
    
    // Home page
    'home.hero.title': 'Professional Healthcare Services in Qatar',
    'home.hero.subtitle': 'Comprehensive healthcare solutions tailored to meet your unique needs and delivered by certified professionals.',
    'home.hero.cta.primary': 'Book Consultation',
    'home.hero.cta.secondary': 'Call Us: 31599965',
    
    // About page
    'about.hero.title': 'About BHSK Health Services',
    'about.hero.subtitle': 'Delivering excellence in healthcare services across Qatar since 2014.',
    'about.story.title': 'Our Story',
    'about.story.content1': 'BHSK Health Services was founded with a simple yet powerful mission: to bring professional healthcare services directly to families in Qatar. We recognized the growing need for quality healthcare services and set out to create a service that combines medical expertise with genuine compassion.',
    'about.story.content2': 'Over the years, we\'ve grown from a small team to become one of Qatar\'s most trusted healthcare providers. Our success is built on the trust our clients place in us and the dedication of our healthcare professionals.',
    'about.story.content3': 'Today, we serve hundreds of families across Qatar, providing comprehensive nursing, elderly care, physiotherapy, and specialized healthcare services. Every member of our team shares our commitment to excellence and our belief that everyone deserves access to quality healthcare in the comfort of their own home.',
    'about.mission.title': 'Our Mission',
    'about.mission.content': 'To provide exceptional healthcare services that improve the quality of life for our clients. We strive to deliver professional, compassionate care that meets the unique needs of each individual and family we serve, while maintaining the highest standards of medical excellence and ethical practice.',
    'about.vision.title': 'Our Vision',
    'about.vision.content': 'To be the leading provider of healthcare services in Qatar, recognized for our commitment to quality, innovation, and patient satisfaction. We envision a future where every person has access to professional healthcare services tailored to their needs and circumstances.',
    'about.values.title': 'Our Core Values',
    'about.values.subtitle': 'These principles guide everything we do and every decision we make.',
    'about.values.compassion.title': 'Compassion',
    'about.values.compassion.desc': 'We care deeply about every patient and treat them with dignity and respect.',
    'about.values.excellence.title': 'Excellence',
    'about.values.excellence.desc': 'We maintain the highest standards in all aspects of our healthcare services.',
    'about.values.integrity.title': 'Integrity',
    'about.values.integrity.desc': 'We uphold ethical practices and transparency in all our interactions.',
    'about.values.innovation.title': 'Innovation',
    'about.values.innovation.desc': 'We continuously improve our services through modern healthcare practices.',
    'about.team.title': 'Our Team',
    'about.team.subtitle': 'Our team consists of highly qualified healthcare professionals dedicated to providing exceptional care.',
    'about.why.title': 'Why Choose BHSK Health Services',
    'about.why.subtitle': 'Choosing the right healthcare provider is one of the most important decisions for families seeking professional, compassionate, and reliable care. At BHSK Health Services, we take pride in delivering trusted healthcare solutions tailored to each patient\'s individual needs across Qatar.',
    'about.why.qualified.title': 'Qualified and Experienced Nurses',
    'about.why.qualified.desc': 'Our team consists of licensed and well-trained nurses with extensive experience in healthcare, elderly care, and post-hospital recovery. Every nurse is carefully screened and selected to ensure the highest standards of professionalism and patient safety.',
    'about.why.comprehensive.title': 'Comprehensive Healthcare Services',
    'about.why.comprehensive.desc': 'BHSK Health Services provides a wide range of services — from basic nursing assistance to specialized medical care. Whether you need short-term post-surgery care or long-term elderly support, our team is equipped to deliver compassionate and efficient service.',
    'about.why.patient.title': 'Patient-Centered Approach',
    'about.why.patient.desc': 'We understand that every patient is unique. Our healthcare plans are designed around the specific medical, emotional, and personal needs of each individual. This personalized attention helps ensure comfort, dignity, and faster recovery.',
    'about.why.quality.title': 'Commitment to Quality and Safety',
    'about.why.quality.desc': 'BHSK Health Services strictly follows Qatar\'s healthcare regulations and international standards. We regularly monitor performance, conduct training, and maintain detailed documentation to ensure consistent quality care in every setting.',
    'about.why.flexible.title': 'Flexible and Reliable Service',
    'about.why.flexible.desc': 'Our services are available across multiple locations, including homes, clinics, and schools. We provide flexible scheduling options and ensure that nurses are punctual, professional, and fully dedicated to their duties.',
    'about.why.trusted.title': 'Trusted by Families and Institutions',
    'about.why.trusted.desc': 'Over the years, we have earned the trust of families and organizations throughout Qatar by maintaining transparency, professionalism, and genuine care in all our services.',
    'about.difference.title': 'Experience the BHSK Difference',
    'about.difference.subtitle': 'At BHSK Health Services, we believe in providing more than just care — we bring comfort, confidence, and compassion to every home we serve.',
    
    // Services
    'services.hero.title': 'Comprehensive Healthcare Services',
    'services.hero.subtitle': 'Comprehensive healthcare solutions tailored to meet your unique needs and delivered by certified professionals.',
    'services.hero.cta.primary': 'Book Consultation',
    'services.hero.cta.secondary': 'Call Us: 31599965',
    'services.main.title': 'Our Healthcare Services',
    'services.main.subtitle': 'Comprehensive healthcare services designed to support your health and wellbeing across all life stages and situations.',
    'services.highlights.elderly.title': 'Specialized Elderly Care',
    'services.highlights.elderly.content1': 'Our elderly care services are designed to help seniors maintain their independence and quality of life while receiving the support they need. Our compassionate caregivers provide assistance with daily activities, companionship, and specialized medical care.',
    'services.highlights.elderly.content2': 'We understand that every senior has unique needs, which is why we create personalized care plans that address physical, emotional, and social wellbeing.',
    'services.highlights.physio.title': 'Professional Physiotherapy',
    'services.highlights.physio.content1': 'Our physiotherapy services bring expert rehabilitation care directly to your home. Whether you\'re recovering from surgery, an injury, or managing a chronic condition, our licensed physiotherapists develop customized treatment plans to help you regain strength and mobility.',
    'services.highlights.physio.content2': 'We use evidence-based techniques and modern equipment to ensure effective treatment and faster recovery times.',
    'services.additional.title': 'Additional Services',
    'services.additional.subtitle': 'Complementary services to support your overall health and wellness.',
    'services.cta.title': 'Ready to Experience Quality Healthcare at Home?',
    'services.cta.subtitle': 'Contact us today to discuss your specific needs and schedule a consultation with our healthcare team.',
    
    // Service Cards
    'service.home_nursing.title': 'Home Nursing',
    'service.home_nursing.description': 'Professional nursing care delivered at your home',
    'service.elder_care.title': 'Elder Care',
    'service.elder_care.description': 'Comprehensive care for senior citizens',
    'service.neonatal_care.title': 'Neonatal Care',
    'service.neonatal_care.description': 'Specialized care for newborns and infants',
    'service.palliative_care.title': 'Palliative Care',
    'service.palliative_care.description': 'Comfort and support for serious illnesses',
    'service.pregnancy_care.title': 'Pregnancy Care',
    'service.pregnancy_care.description': 'Comprehensive maternal health support',
    'service.school_nurse.title': 'School Nurse',
    'service.school_nurse.description': 'Healthcare services for educational institutions',
    'service.industrial_nurse.title': 'Industrial Nurse',
    'service.industrial_nurse.description': 'Workplace health and safety services',
    'service.travel_care.title': 'Travel Care',
    'service.travel_care.description': 'Healthcare support for travelers',
    'service.post_operative_care.title': 'Post-Operative Care',
    'service.post_operative_care.description': 'Comprehensive recovery support after surgery',
    'service.physiotherapy.title': 'Physiotherapy',
    'service.physiotherapy.description': 'Expert rehabilitation and physical therapy',
    'service.chronic_disease_management.title': 'Chronic Disease Management',
    'service.chronic_disease_management.description': 'Ongoing care for chronic conditions',
    'service.baby_care.title': 'Baby Care & Babysitting',
    'service.baby_care.description': 'Professional care for infants and children',
    
    // Additional Services
    'additional.health_monitoring.title': 'Health Monitoring',
    'additional.health_monitoring.description': 'Regular vital signs and health checks',
    'additional.availability.title': '24/7 Availability',
    'additional.availability.description': 'Round-the-clock nursing services',
    'additional.emergency_care.title': 'Emergency Care',
    'additional.emergency_care.description': 'Immediate response to health emergencies',
    'additional.home_modifications.title': 'Home Modifications',
    'additional.home_modifications.description': 'Safety and accessibility improvements',
    'additional.mental_health.title': 'Mental Health Support',
    'additional.mental_health.description': 'Emotional and psychological care',
    
    // FAQ Questions and Answers
    'faq.question1': 'Are your home care services hourly?',
    'faq.answer1': 'We provide services hourly, 12 hours, 24 hours, weekly, and monthly packages to provide you the best price to match your needs.',
    'faq.question2': 'Can you train my helper or myself to take care of my mother and father?',
    'faq.answer2': 'Yes we can provide basic nursing training. We can also provide one on one training.',
    'faq.question3': 'Are your nurses licensed?',
    'faq.answer3': 'All our registered nurses are licensed. The nurses go through a selection and training process to be part of our team.',
    'faq.question4': 'Can a nurse be available to a patient while in hospital?',
    'faq.answer4': 'Yes. Our dedicated nurses are available to patients in hospital to bring familiarity and extra support to the patient.',
    'faq.question5': 'How do you maintain privacy and confidentiality?',
    'faq.answer5': 'The data and medical records are maintained with strict confidentiality. Our internal policies and guidelines give access only to relevant clinical personnel.',
    
    // Form Options
    'form.select_service': 'Select a service',
    'form.home_nursing': 'Home Nursing',
    'form.elderly_care': 'Elderly Care',
    'form.physiotherapy': 'Physiotherapy',
    'form.baby_care': 'Baby Care',
    'form.post_surgery': 'Post-Surgery Care',
    'form.other': 'Other',
    'form.name_placeholder': 'Enter your full name',
    'form.email_placeholder': 'your.email@example.com',
    'form.phone_placeholder': '+974 XXXX XXXX',
    'form.message_placeholder': 'Tell us about your needs...',
    
    // Contact Quick Options
    'contact.whatsapp.title': 'WhatsApp',
    'contact.whatsapp.subtitle': 'Chat with us instantly',
    'contact.call.title': 'Call Us',
    'contact.email.title': 'Email Us',
    'contact.emergency_button': 'Call Emergency Line',
    
    // Footer Services List
    'footer.service.home_nursing': 'Home Nursing',
    'footer.service.elder_care': 'Elder Care',
    'footer.service.neonatal_care': 'Neonatal Care',
    'footer.service.palliative_care': 'Palliative Care',
    'footer.service.pregnancy_care': 'Pregnancy Care',
    'footer.service.school_nurse': 'School Nurse',
    'footer.service.industrial_nurse': 'Industrial Nurse',
    'footer.service.travel_care': 'Travel Care',
    'footer.service.post_operative_care': 'Post-Operative Care',
    'footer.service.physiotherapy': 'Physiotherapy',
    
    // Home Page
    'home.hero.title': 'Professional Healthcare Services in Qatar',
    'home.hero.subtitle': 'Comprehensive healthcare solutions tailored to meet your unique needs and delivered by certified professionals.',
    'home.hero.cta.primary': 'Book Consultation',
    'home.hero.cta.secondary': 'Call Us: 31599965',
    
    // Service Details
    'service.home_nursing.details': 'Our home nursing services provide comprehensive medical care in the comfort of your own home. Our certified nurses are trained to handle various medical conditions and provide personalized care.',
    'service.home_nursing.duration': 'Available 24/7, hourly, 12-hour, or 24-hour shifts',
    'service.home_nursing.requirements': 'Medical prescription or doctor referral recommended',
    'service.home_nursing.pricing': 'Starting from QAR 150/hour',
    
    'service.elder_care.details': 'Specialized care for senior citizens focusing on maintaining independence while ensuring safety and comfort. Our caregivers are trained in elderly-specific care techniques.',
    'service.elder_care.duration': 'Flexible scheduling from hourly to 24-hour care',
    'service.elder_care.requirements': 'Health assessment and care plan development',
    'service.elder_care.pricing': 'Starting from QAR 120/hour',
    
    'service.neonatal_care.details': 'Expert care for newborns and infants with specialized training in neonatal care. Our nurses provide support for premature babies and newborns with special needs.',
    'service.neonatal_care.duration': '24/7 availability for critical cases',
    'service.neonatal_care.requirements': 'Pediatrician consultation and medical records',
    'service.neonatal_care.pricing': 'Starting from QAR 200/hour',
    
    'service.palliative_care.details': 'Compassionate end-of-life care focusing on comfort, dignity, and quality of life. Our team provides emotional support for both patients and families.',
    'service.palliative_care.duration': 'Continuous care as needed',
    'service.palliative_care.requirements': 'Medical diagnosis and family consultation',
    'service.palliative_care.pricing': 'Starting from QAR 180/hour',
    
    'service.pregnancy_care.details': 'Comprehensive maternal health support from prenatal to postpartum care. Our nurses specialize in pregnancy-related health monitoring and newborn care education.',
    'service.pregnancy_care.duration': 'Flexible scheduling throughout pregnancy and postpartum',
    'service.pregnancy_care.requirements': 'Prenatal medical records and doctor clearance',
    'service.pregnancy_care.pricing': 'Starting from QAR 160/hour',
    
    'service.school_nurse.details': 'Professional healthcare services for educational institutions including student health assessments, emergency response, and health education programs.',
    'service.school_nurse.duration': 'School hours or full-time contracts',
    'service.school_nurse.requirements': 'Educational institution partnership agreement',
    'service.school_nurse.pricing': 'Contract-based pricing available',
    
    'service.industrial_nurse.details': 'Workplace health and safety services including occupational health assessments, injury management, and employee wellness programs.',
    'service.industrial_nurse.duration': 'Business hours or shift-based contracts',
    'service.industrial_nurse.requirements': 'Company partnership and safety protocols',
    'service.industrial_nurse.pricing': 'Corporate contract rates available',
    
    'service.travel_care.details': 'Healthcare support for travelers including pre-travel consultations, medical escort services, and emergency medical support abroad.',
    'service.travel_care.duration': 'As needed for travel duration',
    'service.travel_care.requirements': 'Travel itinerary and medical history',
    'service.travel_care.pricing': 'Starting from QAR 300/day',
    
    'service.post_operative_care.details': 'Comprehensive recovery support after surgery including wound care, pain management, medication administration, and mobility assistance.',
    'service.post_operative_care.duration': '1-4 weeks post-surgery',
    'service.post_operative_care.requirements': 'Surgical discharge summary and care plan',
    'service.post_operative_care.pricing': 'Starting from QAR 170/hour',
    
    'service.physiotherapy.details': 'Expert rehabilitation and physical therapy services delivered at home using evidence-based techniques and modern equipment.',
    'service.physiotherapy.duration': '45-60 minute sessions, 2-3 times per week',
    'service.physiotherapy.requirements': 'Physician referral and assessment',
    'service.physiotherapy.pricing': 'Starting from QAR 250/session',
    
    'service.chronic_disease_management.details': 'Ongoing care for chronic conditions including diabetes, hypertension, heart disease, and COPD with regular monitoring and management.',
    'service.chronic_disease_management.duration': 'Long-term ongoing care',
    'service.chronic_disease_management.requirements': 'Medical diagnosis and treatment plan',
    'service.chronic_disease_management.pricing': 'Starting from QAR 140/hour',
    
    'service.baby_care.details': 'Professional care for infants and children including feeding support, sleep training, development monitoring, and safe engaging activities.',
    'service.baby_care.duration': 'Flexible scheduling from hourly to daily care',
    'service.baby_care.requirements': 'Child\'s medical records and care preferences',
    'service.baby_care.pricing': 'Starting from QAR 100/hour',
    
    // Common service details
    'service.details': 'Service Details',
    'service.duration': 'Duration',
    'service.requirements': 'Requirements',
    'service.pricing': 'Pricing',
    'service.book_now': 'Book Now',
    'service.learn_more': 'Learn More',
    
    // Contact page
    'contact.hero.title': 'Contact Us',
    'contact.hero.subtitle': 'Get in touch with our team. We\'re here to answer your questions and discuss your healthcare needs.',
    'contact.form.title': 'Send Us a Message',
    'contact.form.subtitle': 'Fill out the form below and our team will respond to your inquiry as soon as possible.',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.service': 'Service Interested In',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.quick.title': 'Quick Contact Options',
    'contact.quick.subtitle': 'Prefer a more direct approach? Choose one of our instant contact methods below.',
    'contact.emergency.title': 'Need Immediate Assistance?',
    'contact.emergency.subtitle': 'For urgent healthcare needs, call our 24/7 emergency hotline',
    
    // FAQ page
    'faq.hero.title': 'Frequently Asked Questions',
    'faq.hero.subtitle': 'Find answers to common questions about our healthcare services in Qatar.',
    'faq.still.title': 'Still Have Questions?',
    'faq.still.subtitle': 'Can\'t find the answer you\'re looking for? Our friendly team is here to help.',
    'faq.explore.title': 'Explore More',
    
    // Footer
    'footer.description': 'Professional healthcare services in Qatar. Delivering compassionate, expert healthcare solutions tailored to your needs.',
    'footer.quick.title': 'Quick Links',
    'footer.services.title': 'Our Services',
    'footer.contact.title': 'Contact Us',
    'footer.copyright': 'BHSK Health Services. All rights reserved.',
    'footer.licensed': 'Licensed Healthcare Provider | Ministry of Public Health Qatar',
    
    // Common
    'common.learn_more': 'Learn More',
    'common.contact_us': 'Contact Us',
    'common.call_us': 'Call Us',
    'common.email_us': 'Email Us',
    'common.phone': 'Phone',
    'common.email': 'Email',
    'common.location': 'Location',
    'common.hours': 'Hours',
    'common.address': 'Address',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'الخدمات',
    'nav.contact': 'اتصل بنا',
    'nav.faq': 'الأسئلة الشائعة',
    
    // Home page
    'home.hero.title': 'خدمات الرعاية الصحية المهنية في قطر',
    'home.hero.subtitle': 'حلول رعاية صحية شاملة مصممة خصيصاً لتلبية احتياجاتك الفريدة وتقدمها متخصصون معتمدون.',
    'home.hero.cta.primary': 'احجز استشارة',
    'home.hero.cta.secondary': 'اتصل بنا: 31599965',
    
    // About page
    'about.hero.title': 'حول خدمات بيسك للرعاية الصحية',
    'about.hero.subtitle': 'نقدم التميز في خدمات الرعاية الصحية في جميع أنحاء قطر منذ عام 2014.',
    'about.story.title': 'قصتنا',
    'about.story.content1': 'تأسست خدمات بيسك للرعاية الصحية بمهمة بسيطة لكنها قوية: تقديم خدمات الرعاية الصحية المهنية مباشرة للأسر في قطر. أدركنا الحاجة المتزايدة لخدمات رعاية صحية عالية الجودة وبدأنا في إنشاء خدمة تجمع بين الخبرة الطبية والرحمة الحقيقية.',
    'about.story.content2': 'على مر السنين، نمت من فريق صغير لتصبح واحدة من أكثر مقدمي الرعاية الصحية الموثوقين في قطر. نجاحنا مبني على الثقة التي يضعها عملاؤنا فينا وعلى تفاني متخصصي الرعاية الصحية لدينا.',
    'about.story.content3': 'اليوم، نخدم مئات الأسر في جميع أنحاء قطر، ونقدم خدمات التمريض الشاملة ورعاية المسنين والعلاج الطبيعي وخدمات الرعاية الصحية المتخصصة. كل عضو في فريقنا يشارك التزامنا بالتميز وإيماننا بأن كل شخص يستحق الحصول على رعاية صحية عالية الجودة في راحة منزله.',
    'about.mission.title': 'مهمتنا',
    'about.mission.content': 'تقديم خدمات رعاية صحية استثنائية تحسن نوعية الحياة لعملائنا. نسعى لتقديم رعاية مهنية ورحيمة تلبي الاحتياجات الفريدة لكل فرد وأسرة نخدمها، مع الحفاظ على أعلى معايير التميز الطبي والممارسة الأخلاقية.',
    'about.vision.title': 'رؤيتنا',
    'about.vision.content': 'أن نكون المزود الرائد لخدمات الرعاية الصحية في قطر، معترف بنا لالتزامنا بالجودة والابتكار ورضا المرضى. نتخيل مستقبلاً حيث يكون لكل شخص إمكانية الوصول إلى خدمات رعاية صحية مهنية مصممة حسب احتياجاته وظروفه.',
    'about.values.title': 'قيمنا الأساسية',
    'about.values.subtitle': 'هذه المبادئ توجه كل ما نقوم به وكل قرار نتخذه.',
    'about.values.compassion.title': 'الرحمة',
    'about.values.compassion.desc': 'نحن نهتم بعمق بكل مريض ونعامله بكرامة واحترام.',
    'about.values.excellence.title': 'التميز',
    'about.values.excellence.desc': 'نحافظ على أعلى المعايير في جميع جوانب خدماتنا الصحية.',
    'about.values.integrity.title': 'النزاهة',
    'about.values.integrity.desc': 'نلتزم بالممارسات الأخلاقية والشفافية في جميع تفاعلاتنا.',
    'about.values.innovation.title': 'الابتكار',
    'about.values.innovation.desc': 'نحسن خدماتنا باستمرار من خلال ممارسات الرعاية الصحية الحديثة.',
    'about.team.title': 'فريقنا',
    'about.team.subtitle': 'فريقنا يتكون من متخصصي رعاية صحية مؤهلين تأهيلاً عالياً ومكرسين لتقديم رعاية استثنائية.',
    'about.why.title': 'لماذا تختار خدمات بيسك للرعاية الصحية',
    'about.why.subtitle': 'اختيار مزود الرعاية الصحية المناسب هو أحد أهم القرارات للأسر التي تسعى للحصول على رعاية مهنية ورحيمة وموثوقة. في خدمات بيسك للرعاية الصحية، نفخر بتقديم حلول تمريض ورعاية منزلية موثوقة مصممة خصيصاً لاحتياجات كل مريض فردية في جميع أنحاء قطر.',
    'about.why.qualified.title': 'ممرضون مؤهلون وذوو خبرة',
    'about.why.qualified.desc': 'فريقنا يتكون من ممرضين مرخصين ومدربين تدريباً جيداً مع خبرة واسعة في الرعاية الصحية ورعاية المسنين والتعافي بعد المستشفى. كل ممرض يتم فحصه واختياره بعناية لضمان أعلى معايير المهنية وسلامة المرضى.',
    'about.why.comprehensive.title': 'خدمات رعاية صحية شاملة',
    'about.why.comprehensive.desc': 'خدمات بيسك للرعاية الصحية تقدم مجموعة واسعة من الخدمات - من المساعدة التمريضية الأساسية إلى الرعاية الطبية المتخصصة. سواء كنت تحتاج رعاية قصيرة المدى بعد الجراحة أو دعم طويل المدى للمسنين، فريقنا مجهز لتقديم خدمة رحيمة وفعالة.',
    'about.why.patient.title': 'نهج يركز على المريض',
    'about.why.patient.desc': 'نفهم أن كل مريض فريد. خطط الرعاية الصحية لدينا مصممة حول الاحتياجات الطبية والعاطفية والشخصية المحددة لكل فرد. هذا الاهتمام الشخصي يساعد في ضمان الراحة والكرامة والتعافي الأسرع.',
    'about.why.quality.title': 'الالتزام بالجودة والسلامة',
    'about.why.quality.desc': 'خدمات بيسك للرعاية الصحية تتبع بدقة لوائح الرعاية الصحية في قطر والمعايير الدولية. نحن نراقب الأداء بانتظام ونقوم بالتدريب ونحافظ على توثيق مفصل لضمان رعاية عالية الجودة في كل مكان.',
    'about.why.flexible.title': 'خدمة مرنة وموثوقة',
    'about.why.flexible.desc': 'خدماتنا متاحة في مواقع متعددة، بما في ذلك المنازل والعيادات والمدارس. نقدم خيارات جدولة مرنة ونتأكد من أن الممرضين دقيقون ومهنيون ومكرسون بالكامل لواجباتهم.',
    'about.why.trusted.title': 'موثوق من الأسر والمؤسسات',
    'about.why.trusted.desc': 'على مر السنين، اكتسبنا ثقة الأسر والمنظمات في جميع أنحاء قطر من خلال الحفاظ على الشفافية والمهنية والرعاية الحقيقية في جميع خدماتنا.',
    'about.difference.title': 'اختبر فرق بيسك',
    'about.difference.subtitle': 'في خدمات بيسك للرعاية الصحية، نؤمن بتقديم أكثر من مجرد رعاية - نحن نجلب الراحة والثقة والرحمة لكل منزل نخدمه.',
    
    // Services
    'services.hero.title': 'خدمات الرعاية الصحية الشاملة',
    'services.hero.subtitle': 'حلول رعاية صحية شاملة مصممة خصيصاً لتلبية احتياجاتك الفريدة وتقدمها متخصصون معتمدون.',
    'services.hero.cta.primary': 'احجز استشارة',
    'services.hero.cta.secondary': 'اتصل بنا: 31599965',
    'services.main.title': 'خدماتنا الصحية',
    'services.main.subtitle': 'خدمات رعاية صحية شاملة مصممة لدعم صحتك ورفاهيتك في جميع مراحل الحياة والمواقف.',
    'services.highlights.elderly.title': 'رعاية متخصصة للمسنين',
    'services.highlights.elderly.content1': 'خدمات رعاية المسنين لدينا مصممة لمساعدة كبار السن على الحفاظ على استقلاليتهم ونوعية حياتهم مع تلقي الدعم الذي يحتاجونه. مقدمي الرعاية الرحيمون لدينا يقدمون المساعدة في الأنشطة اليومية والرفقة والرعاية الطبية المتخصصة.',
    'services.highlights.elderly.content2': 'نفهم أن كل مسن له احتياجات فريدة، ولهذا السبب ننشئ خطط رعاية شخصية تعالج الرفاهية الجسدية والعاطفية والاجتماعية.',
    'services.highlights.physio.title': 'العلاج الطبيعي المهني',
    'services.highlights.physio.content1': 'خدمات العلاج الطبيعي لدينا تجلب رعاية إعادة التأهيل المتخصصة مباشرة إلى منزلك. سواء كنت تتعافى من جراحة أو إصابة أو تدير حالة مزمنة، أخصائيو العلاج الطبيعي المرخصون لدينا يطورون خطط علاج مخصصة لمساعدتك على استعادة القوة والحركة.',
    'services.highlights.physio.content2': 'نستخدم تقنيات قائمة على الأدلة ومعدات حديثة لضمان علاج فعال وأوقات تعافي أسرع.',
    'services.additional.title': 'خدمات إضافية',
    'services.additional.subtitle': 'خدمات تكميلية لدعم صحتك العامة ورفاهيتك.',
    'services.cta.title': 'مستعد لتجربة رعاية صحية عالية الجودة في المنزل؟',
    'services.cta.subtitle': 'اتصل بنا اليوم لمناقشة احتياجاتك المحددة وحدد موعد استشارة مع فريق الرعاية الصحية لدينا.',
    
    // Service Cards
    'service.home_nursing.title': 'التمريض المنزلي',
    'service.home_nursing.description': 'رعاية تمريضية مهنية تقدم في منزلك',
    'service.elder_care.title': 'رعاية المسنين',
    'service.elder_care.description': 'رعاية شاملة للمواطنين كبار السن',
    'service.neonatal_care.title': 'الرعاية الوليدية',
    'service.neonatal_care.description': 'رعاية متخصصة للمواليد الجدد والرضع',
    'service.palliative_care.title': 'الرعاية التلطيفية',
    'service.palliative_care.description': 'الراحة والدعم للأمراض الخطيرة',
    'service.pregnancy_care.title': 'رعاية الحمل',
    'service.pregnancy_care.description': 'دعم شامل لصحة الأمومة',
    'service.school_nurse.title': 'ممرض المدرسة',
    'service.school_nurse.description': 'خدمات الرعاية الصحية للمؤسسات التعليمية',
    'service.industrial_nurse.title': 'ممرض صناعي',
    'service.industrial_nurse.description': 'خدمات الصحة والسلامة في مكان العمل',
    'service.travel_care.title': 'رعاية السفر',
    'service.travel_care.description': 'دعم الرعاية الصحية للمسافرين',
    'service.post_operative_care.title': 'الرعاية بعد الجراحة',
    'service.post_operative_care.description': 'دعم شامل للتعافي بعد الجراحة',
    'service.physiotherapy.title': 'العلاج الطبيعي',
    'service.physiotherapy.description': 'إعادة التأهيل والعلاج الطبيعي المتخصص',
    'service.chronic_disease_management.title': 'إدارة الأمراض المزمنة',
    'service.chronic_disease_management.description': 'رعاية مستمرة للحالات المزمنة',
    'service.baby_care.title': 'رعاية الأطفال والجليسة',
    'service.baby_care.description': 'رعاية مهنية للرضع والأطفال',
    
    // Additional Services
    'additional.health_monitoring.title': 'مراقبة الصحة',
    'additional.health_monitoring.description': 'فحوصات دورية للعلامات الحيوية والصحة',
    'additional.availability.title': 'متاح 24/7',
    'additional.availability.description': 'خدمات تمريضية على مدار الساعة',
    'additional.emergency_care.title': 'الرعاية الطارئة',
    'additional.emergency_care.description': 'استجابة فورية للطوارئ الصحية',
    'additional.home_modifications.title': 'تعديلات المنزل',
    'additional.home_modifications.description': 'تحسينات السلامة وإمكانية الوصول',
    'additional.mental_health.title': 'دعم الصحة النفسية',
    'additional.mental_health.description': 'الرعاية العاطفية والنفسية',
    
    // FAQ Questions and Answers
    'faq.question1': 'هل خدمات الرعاية المنزلية بالساعة؟',
    'faq.answer1': 'نحن نقدم خدمات بالساعة، 12 ساعة، 24 ساعة، أسبوعية، وشهرية لتوفير أفضل سعر يناسب احتياجاتك.',
    'faq.question2': 'هل يمكنكم تدريب مساعدي أو نفسي لرعاية والدي؟',
    'faq.answer2': 'نعم يمكننا تقديم تدريب تمريضي أساسي. يمكننا أيضاً تقديم تدريب فردي.',
    'faq.question3': 'هل ممرضاتكم مرخصات؟',
    'faq.answer3': 'جميع ممرضاتنا المسجلات مرخصات. الممرضات يخضعن لعملية اختيار وتدريب ليكونن جزءاً من فريقنا.',
    'faq.question4': 'هل يمكن لممرضة أن تكون متاحة لمريض أثناء وجوده في المستشفى؟',
    'faq.answer4': 'نعم. ممرضاتنا المخصصات متاحات للمرضى في المستشفى لتقديم الألفة والدعم الإضافي للمريض.',
    'faq.question5': 'كيف تحافظون على الخصوصية والسرية؟',
    'faq.answer5': 'البيانات والسجلات الطبية محفوظة بسرية صارمة. سياساتنا وإرشاداتنا الداخلية تعطي الوصول فقط للموظفين السريريين ذوي الصلة.',
    
    // Form Options
    'form.select_service': 'اختر خدمة',
    'form.home_nursing': 'التمريض المنزلي',
    'form.elderly_care': 'رعاية المسنين',
    'form.physiotherapy': 'العلاج الطبيعي',
    'form.baby_care': 'رعاية الأطفال',
    'form.post_surgery': 'الرعاية بعد الجراحة',
    'form.other': 'أخرى',
    'form.name_placeholder': 'أدخل اسمك الكامل',
    'form.email_placeholder': 'your.email@example.com',
    'form.phone_placeholder': '+974 XXXX XXXX',
    'form.message_placeholder': 'أخبرنا عن احتياجاتك...',
    
    // Contact Quick Options
    'contact.whatsapp.title': 'واتساب',
    'contact.whatsapp.subtitle': 'تحدث معنا فوراً',
    'contact.call.title': 'اتصل بنا',
    'contact.email.title': 'راسلنا',
    'contact.emergency_button': 'اتصل بخط الطوارئ',
    
    // Footer Services List
    'footer.service.home_nursing': 'التمريض المنزلي',
    'footer.service.elder_care': 'رعاية المسنين',
    'footer.service.neonatal_care': 'الرعاية الوليدية',
    'footer.service.palliative_care': 'الرعاية التلطيفية',
    'footer.service.pregnancy_care': 'رعاية الحمل',
    'footer.service.school_nurse': 'ممرض المدرسة',
    'footer.service.industrial_nurse': 'ممرض صناعي',
    'footer.service.travel_care': 'رعاية السفر',
    'footer.service.post_operative_care': 'الرعاية بعد الجراحة',
    'footer.service.physiotherapy': 'العلاج الطبيعي',
    
    // Home Page
    'home.hero.title': 'خدمات الرعاية الصحية المهنية في قطر',
    'home.hero.subtitle': 'حلول رعاية صحية شاملة مصممة خصيصاً لتلبية احتياجاتك الفريدة وتقدمها متخصصون معتمدون.',
    'home.hero.cta.primary': 'احجز استشارة',
    'home.hero.cta.secondary': 'اتصل بنا: 31599965',
    
    // Service Details
    'service.home_nursing.details': 'خدمات التمريض المنزلي لدينا توفر رعاية طبية شاملة في راحة منزلك. ممرضاتنا المعتمدات مدربات على التعامل مع حالات طبية مختلفة وتقديم رعاية شخصية.',
    'service.home_nursing.duration': 'متاح 24/7، بالساعة، 12 ساعة، أو نوبات 24 ساعة',
    'service.home_nursing.requirements': 'وصفة طبية أو إحالة طبيب موصى بها',
    'service.home_nursing.pricing': 'بدءاً من 150 ريال قطري/ساعة',
    
    'service.elder_care.details': 'رعاية متخصصة للمواطنين كبار السن تركز على الحفاظ على الاستقلالية مع ضمان السلامة والراحة. مقدمي الرعاية لدينا مدربون على تقنيات الرعاية الخاصة بكبار السن.',
    'service.elder_care.duration': 'جدولة مرنة من الساعة إلى رعاية 24 ساعة',
    'service.elder_care.requirements': 'تقييم صحي وتطوير خطة رعاية',
    'service.elder_care.pricing': 'بدءاً من 120 ريال قطري/ساعة',
    
    'service.neonatal_care.details': 'رعاية متخصصة للمواليد الجدد والرضع مع تدريب متخصص في الرعاية الوليدية. ممرضاتنا تقدم الدعم للأطفال الخدج والمواليد ذوي الاحتياجات الخاصة.',
    'service.neonatal_care.duration': 'متاح 24/7 للحالات الحرجة',
    'service.neonatal_care.requirements': 'استشارة طبيب أطفال والسجلات الطبية',
    'service.neonatal_care.pricing': 'بدءاً من 200 ريال قطري/ساعة',
    
    'service.palliative_care.details': 'رعاية متعاطفة في نهاية العمر تركز على الراحة والكرامة وجودة الحياة. فريقنا يقدم الدعم العاطفي للمرضى والعائلات.',
    'service.palliative_care.duration': 'رعاية مستمرة حسب الحاجة',
    'service.palliative_care.requirements': 'تشخيص طبي واستشارة عائلية',
    'service.palliative_care.pricing': 'بدءاً من 180 ريال قطري/ساعة',
    
    'service.pregnancy_care.details': 'دعم شامل لصحة الأمومة من الرعاية السابقة للولادة إلى ما بعد الولادة. ممرضاتنا متخصصات في مراقبة الصحة المتعلقة بالحمل وتعليم رعاية المواليد الجدد.',
    'service.pregnancy_care.duration': 'جدولة مرنة طوال فترة الحمل وما بعد الولادة',
    'service.pregnancy_care.requirements': 'السجلات الطبية السابقة للولادة وموافقة الطبيب',
    'service.pregnancy_care.pricing': 'بدءاً من 160 ريال قطري/ساعة',
    
    'service.school_nurse.details': 'خدمات رعاية صحية مهنية للمؤسسات التعليمية تشمل تقييمات صحة الطلاب والاستجابة للطوارئ وبرامج التثقيف الصحي.',
    'service.school_nurse.duration': 'ساعات المدرسة أو عقود بدوام كامل',
    'service.school_nurse.requirements': 'اتفاقية شراكة مع المؤسسة التعليمية',
    'service.school_nurse.pricing': 'أسعار تعاقدية متاحة',
    
    'service.industrial_nurse.details': 'خدمات الصحة والسلامة في مكان العمل تشمل تقييمات الصحة المهنية وإدارة الإصابات وبرامج رفاهية الموظفين.',
    'service.industrial_nurse.duration': 'ساعات العمل أو عقود قائمة على النوبات',
    'service.industrial_nurse.requirements': 'شراكة الشركة وبروتوكولات السلامة',
    'service.industrial_nurse.pricing': 'أسعار عقود الشركات متاحة',
    
    'service.travel_care.details': 'دعم الرعاية الصحية للمسافرين يشمل استشارات ما قبل السفر وخدمات المرافقة الطبية والدعم الطبي الطارئ في الخارج.',
    'service.travel_care.duration': 'حسب الحاجة لمدة السفر',
    'service.travel_care.requirements': 'خطة السفر والتاريخ الطبي',
    'service.travel_care.pricing': 'بدءاً من 300 ريال قطري/يوم',
    
    'service.post_operative_care.details': 'دعم شامل للتعافي بعد الجراحة يشمل رعاية الجروح وإدارة الألم وإعطاء الأدوية والمساعدة في الحركة.',
    'service.post_operative_care.duration': '1-4 أسابيع بعد الجراحة',
    'service.post_operative_care.requirements': 'ملخص الخروج الجراحي وخطة الرعاية',
    'service.post_operative_care.pricing': 'بدءاً من 170 ريال قطري/ساعة',
    
    'service.physiotherapy.details': 'خدمات إعادة التأهيل والعلاج الطبيعي المتخصصة تقدم في المنزل باستخدام تقنيات قائمة على الأدلة ومعدات حديثة.',
    'service.physiotherapy.duration': 'جلسات 45-60 دقيقة، 2-3 مرات في الأسبوع',
    'service.physiotherapy.requirements': 'إحالة طبيب وتقييم',
    'service.physiotherapy.pricing': 'بدءاً من 250 ريال قطري/جلسة',
    
    'service.chronic_disease_management.details': 'رعاية مستمرة للحالات المزمنة تشمل السكري وارتفاع ضغط الدم وأمراض القلب ومرض الانسداد الرئوي المزمن مع مراقبة وإدارة منتظمة.',
    'service.chronic_disease_management.duration': 'رعاية مستمرة طويلة الأجل',
    'service.chronic_disease_management.requirements': 'تشخيص طبي وخطة علاج',
    'service.chronic_disease_management.pricing': 'بدءاً من 140 ريال قطري/ساعة',
    
    'service.baby_care.details': 'رعاية مهنية للرضع والأطفال تشمل دعم التغذية وتدريب النوم ومراقبة التطور وأنشطة آمنة ومشجعة.',
    'service.baby_care.duration': 'جدولة مرنة من الساعة إلى الرعاية اليومية',
    'service.baby_care.requirements': 'السجلات الطبية للطفل وتفضيلات الرعاية',
    'service.baby_care.pricing': 'بدءاً من 100 ريال قطري/ساعة',
    
    // Common service details
    'service.details': 'تفاصيل الخدمة',
    'service.duration': 'المدة',
    'service.requirements': 'المتطلبات',
    'service.pricing': 'التسعير',
    'service.book_now': 'احجز الآن',
    'service.learn_more': 'تعلم المزيد',
    
    // Contact page
    'contact.hero.title': 'اتصل بنا',
    'contact.hero.subtitle': 'تواصل مع فريقنا. نحن هنا للإجابة على أسئلتك ومناقشة احتياجاتك الصحية.',
    'contact.form.title': 'أرسل لنا رسالة',
    'contact.form.subtitle': 'املأ النموذج أدناه وسيرد فريقنا على استفسارك في أقرب وقت ممكن.',
    'contact.form.name': 'الاسم الكامل',
    'contact.form.email': 'عنوان البريد الإلكتروني',
    'contact.form.phone': 'رقم الهاتف',
    'contact.form.service': 'الخدمة المهتم بها',
    'contact.form.message': 'الرسالة',
    'contact.form.submit': 'إرسال الرسالة',
    'contact.quick.title': 'خيارات الاتصال السريع',
    'contact.quick.subtitle': 'تفضل نهجاً أكثر مباشرة؟ اختر إحدى طرق الاتصال الفوري لدينا أدناه.',
    'contact.emergency.title': 'تحتاج مساعدة فورية؟',
    'contact.emergency.subtitle': 'للاحتياجات الصحية الطارئة، اتصل بخط الطوارئ المتاح 24/7',
    
    // FAQ page
    'faq.hero.title': 'الأسئلة الشائعة',
    'faq.hero.subtitle': 'ابحث عن إجابات للأسئلة الشائعة حول خدماتنا الصحية في قطر.',
    'faq.still.title': 'لا تزال لديك أسئلة؟',
    'faq.still.subtitle': 'لا تجد الإجابة التي تبحث عنها؟ فريقنا الودود هنا لمساعدتك.',
    'faq.explore.title': 'استكشف المزيد',
    
    // Footer
    'footer.description': 'خدمات رعاية صحية مهنية في قطر. نقدم حلول رعاية صحية متخصصة ورحيمة مصممة حسب احتياجاتك.',
    'footer.quick.title': 'روابط سريعة',
    'footer.services.title': 'خدماتنا',
    'footer.contact.title': 'اتصل بنا',
    'footer.copyright': 'خدمات بيسك للرعاية الصحية. جميع الحقوق محفوظة.',
    'footer.licensed': 'مزود رعاية صحية مرخص | وزارة الصحة العامة قطر',
    
    // Common
    'common.learn_more': 'اعرف المزيد',
    'common.contact_us': 'اتصل بنا',
    'common.call_us': 'اتصل بنا',
    'common.email_us': 'راسلنا',
    'common.phone': 'الهاتف',
    'common.email': 'البريد الإلكتروني',
    'common.location': 'الموقع',
    'common.hours': 'ساعات العمل',
    'common.address': 'العنوان',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Load language from localStorage or default to 'en'
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ar')) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    // Save language to localStorage
    localStorage.setItem('language', language);
    
    // Update document direction
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};
