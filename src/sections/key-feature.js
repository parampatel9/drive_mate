/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import f1 from 'assets/key-feature/RTO Examf1.svg';
import f2 from 'assets/key-feature/RTO INFOf2.svg';
import f3 from 'assets/key-feature/TRAFFIC-RULESf3.svg';
import f4 from 'assets/key-feature/VEHICLE-RULESf4.svg';
import f5 from 'assets/key-feature/PREPARE EXAMf5.svg';

const data = [
  {
    id: 1,
    imgSrc: f1,
    altText: 'Exam',
    title: 'RTO Exam',
    text:
      'Prepare RTO Exam Test',
  },
  {
    id: 2,
    imgSrc: f2,
    altText: 'Info',
    title: 'RTO Info',
    text:
      'Verify City & RTO Codes',
  },
  {
    id: 3,
    imgSrc: f3,
    altText: 'Rules & Regulations',
    title: 'Traffic Rules & Regulations',
    text:
      'Read & understand the traffic rules',
  },
];
const data2 = [
  {
    id: 1,
    imgSrc: f4,
    altText: 'Rules',
    title: 'Vehicle Rules',
    text:
      'Vehicle Traffic Rules Update',
  },
  {
    id: 2,
    imgSrc: f5,
    altText: 'Prepare',
    title: 'Prepare',
    text:
      'Verify City & RTO Codes',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
          slogan="App features"
          title="Meet exciting feature of app"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
        <Grid sx={styles.grid2}>
          {data2.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    px: [0, null, null, '40px', null, '80px'],
    pt: [0, null, null, null, null, null, null, 3],
    
    gridGap: ['35px 0', null, '40px 0'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    '& > div': {
      px: [0, '15px', null, '25px', null, '30px', '40px', '60px'],
    },
  },
  grid2: {
    px: [0, null, null, '40px', null, '80px'],
    pt: [8, null, null, null, null, null, null, 3],
    gridGap: ['35px 0', null, '40px 0'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',

    ],
    width: ['100%', '70%'],
    mx: 'auto',
    '& > div': {
      px: [0, '15px', null, '25px', null, '30px', '40px', '60px'],
    },
  },
};
