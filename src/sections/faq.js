/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Accordion from 'components/accordion/accordion';
const faqs = [
  {
    title: 'Is DriveMate suitable for both Light Multirole Vehicle (LMV) and Heavy Motor Vehicle (HMV) license preparation?',
    contents: (
      <div>
       
Absolutely, DriveMate is designed for both LMV and HMV license preparation, offering tailored content and practice questions for both categories, ensuring a comprehensive and effective learning experience for all drivers.
      </div>
    ),
  },
  {
    title: 'Is DriveMate suitable for beginners as well as experienced drivers looking to refresh their knowledge?',
    contents: (
      <div>
        Yes, DriveMate is suitable for both beginners and experienced drivers, offering a user-friendly interface and diverse content to cater to all levels of learners.
      </div>
    ),
  },
  {
    title: `How fast is the performance of DriveMate during quizzes and practice sessions?`,
    contents: (
      <div>
        DriveMate ensures swift performance during quizzes and practice sessions, offering a responsive and efficient learning experience for users.
      </div>
    ),
  },
  {
    title: `How do I track my progress using DriveMate?`,
    contents: (
      <div>
        With DriveMate, tracking progress is simple. Receive real-time feedback, review quiz results, and monitor performance analytics seamlessly within the user-friendly 
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <section id='faq' sx={{ variant: 'section.faq' }}>
      <Container>
        <SectionHeader
          title="Frequently asked question"
          slogan="Get your question answer"
        />
        <Box
          sx={{
            display: 'flex',
            width: ['100%', null, null, '650px', '745px'],
            flexDirection: 'column',
            mx: 'auto',
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </section>
  );
}
