import { FaSchool, FaGraduationCap, FaLaptopCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Education = () => {
  return (
    <section id='education' className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-3xl w-full p-6">
        <h2 className="text-3xl font-semibold mb-10 text-center text-gray-900">
          EDUCATION
        </h2>

        {/* SSC */}
        <motion.div
          className="mb-8 flex items-start gap-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FaSchool className="text-green-600 w-7 h-7 mt-1" />
          <div>
            <h3 className="text-xl font-bold text-green-600">
              Secondary School Certificate (SSC)
            </h3>
            <p className="text-gray-700 font-semibold mt-1">
              Bgc Academy School & College
            </p>
            <p className="text-gray-600 mt-1">Subject: Business Studies</p>
            <p className="text-gray-500 mt-1">(SSC - 2021)</p>
            <p className="text-gray-600 mt-2 italic">
              Completed Secondary School Certificate (SSC) with good marks.
            </p>
          </div>
        </motion.div>

        {/* Diploma */}
        <motion.div
          className="mb-8 flex items-start gap-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <FaGraduationCap className="text-green-600 w-7 h-7 mt-1" />
          <div>
            <h3 className="text-xl font-bold text-green-600">
              Diploma in Engineering
            </h3>
            <p className="text-gray-700 font-semibold mt-1">
              National Institute of Technology
            </p>
            <p className="text-gray-600 mt-1">
              Subject: Computer Science and Engineering (CSE)
            </p>
            <p className="text-gray-500 mt-1">(2021-2025)</p>
            <p className="text-gray-600 mt-2 italic">
              Currently pursuing a Diploma in Engineering in the field of Computer
              Science and Communication.
            </p>
          </div>
        </motion.div>

        {/* Web Development Course */}
        <motion.div
          className="flex items-start gap-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <FaLaptopCode className="text-green-600 w-7 h-7 mt-1" />
          <div>
            <h3 className="text-xl font-bold text-green-600">
              Web Development Course
            </h3>
            <p className="text-gray-600 mt-2">
              Started learning Web Development in 2024 and completed a comprehensive course from{' '}
              <span className="font-semibold text-blue-600">Programming Hero</span>, gaining hands-on experience in building websites.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
