// TextContentPage.jsx
import React, { useState } from 'react';
import './index.css'; 

function AccordionCard({ title, content, image }) {
    const [isOpen, setIsOpen] = useState(false);

    const displayContent = isOpen ? content : content.split('.').shift() + '...';

    const handleArrowClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="professionalcard">
            <div className="img-wrapper">
                <img src={image} alt={title} />
            </div>
            <div className="content">
                <h3>
                    {title}
                    <span className="accordion-toggle" onClick={handleArrowClick}>
                        {isOpen ? '▲' : '▼'}
                    </span>
                </h3>
                <p>{displayContent}</p>
            </div>
        </div>
    );
}
function PanelsPage() {
    return (
      <div>
        <h1>Our Maltese Dogs Engaging in Various Occupations</h1>
        <main>
        <section className="professionalcards">
                <AccordionCard 
                  title="Policeman"
                  content="Welcome to the Police K9 Handler Training Course, a specialized program designed to develop the skills necessary for effective canine law enforcement partnerships. In this course, you'll learn advanced techniques in canine obedience, scent tracking, search and rescue, and suspect apprehension. We place a strong emphasis on building a strong bond between handler and dog, as this relationship is crucial for successful field operations. You will be trained in understanding canine behavior and communication to ensure a harmonious working relationship. The curriculum includes rigorous physical training for both handler and dog, ensuring peak performance in demanding situations. Safety protocols for both the handler and the dog are a top priority and will be thoroughly covered. We will also focus on legal aspects and ethical considerations specific to K9 units. Practical exercises will simulate real-life scenarios, from narcotics detection to crowd control. Our experienced instructors, both human and canine, bring a wealth of knowledge and field experience to the course. Upon completion, you will be well-equipped to join the ranks of elite police K9 units, serving and protecting with your four-legged partner."
                  image="images/policeman.jpg"
                />
                <AccordionCard 
                  title="Chef"
                  content="Welcome to the Dog Chef Training Course, an innovative program designed to teach you the art of creating nutritious and delicious meals specifically for dogs. In this course, you'll learn about canine nutrition, including essential vitamins, minerals, and the balance of proteins, fats, and carbohydrates needed for a dog's diet. We'll explore a variety of recipes, from everyday meals to special dietary needs for dogs with allergies or health conditions. Hands-on cooking sessions will teach you how to prepare homemade dog food and treats using safe and healthy ingredients. You'll gain knowledge on how to source quality ingredients and understand food labels to ensure the best choices for canine diets. The course includes lessons on food safety and storage, ensuring meals are not only tasty but also safe for dogs to consume. We'll cover the latest trends in dog cuisine, including grain-free and organic options. You'll learn to tailor meals to different life stages of dogs, from puppies to seniors. Our experienced instructors, skilled in both culinary arts and canine nutrition, will guide you through the intricacies of cooking for canine palates. By the end of this course, you'll be equipped with the skills to create a diverse range of healthy, enjoyable meals that cater to the unique dietary needs of dogs."
                  image="images/chef.jpg"
                />
                <AccordionCard 
                  title="Doctor"
                  content="Welcome to the Veterinary Training Course for Canine Health, a comprehensive program designed to equip you with the skills and knowledge necessary to provide expert medical care to dogs. This course covers a wide range of topics, including canine anatomy and physiology, providing you with a deep understanding of a dog's body systems. You will learn about common canine diseases and their treatments, focusing on both medical and surgical interventions. The program includes hands-on training in diagnostic techniques such as X-rays, ultrasounds, and lab tests, vital for accurate diagnosis. We place a strong emphasis on preventive care, including vaccination protocols, parasite control, and nutrition to maintain optimal canine health. You will be trained in emergency and critical care procedures, preparing you to handle urgent medical situations with confidence. The course also covers aspects of canine behavior and mental health, important for holistic veterinary care. Ethical considerations and the human-animal bond are integral parts of the curriculum, ensuring compassionate and empathetic care. Our experienced veterinary professionals will guide you through the complexities of canine medicine using a blend of theoretical knowledge and practical experience. Upon completion, you will be well-prepared to pursue a fulfilling career as a veterinarian specializing in canine health."
                  image="images/doctor.jpg"
                />
            </section>       
        </main>
      </div>
    );
}

export default PanelsPage;
