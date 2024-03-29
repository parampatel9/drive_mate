/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Box, Heading, Text } from 'theme-ui';
import SectionHeader from 'components/section-header';

import PatternBG from 'assets/patternBG.png';
import ArrowOdd from 'assets/arrowOdd.png';
import ArrowEven from 'assets/arrowEven.png';

const data = [
  {
    id: 1,
    title: 'Prepare RTO Test',
    text:
      'Our comprehensive driving test preparation app is intended to help students like you master the rules of the road and pass your driving exam on the first try.',
  },
  {
    id: 2,
    title: ' Practice Exam Set',
    text:
      'Maintain diligent progress monitoring and observe your improvement over time. DriveMate diligently records your performance on practice exams, aiding you in pinpointing areas that require additional focus.',
  },
  {
    id: 3,
    title: 'Result History',
    text:
      'Review Your Practice Test Results Explore your past performance records effortlessly.',
  },
  // {
  //   id: 4,
  //   title: 'Customer receives funds payment',
  //   text:
  //     'Get your blood tests delivered at home collect a sample from the your blood tests.',
  // },
];

export default function WorkFlow() {
  return (
    <section sx={styles.workflow} id='workflow'>
      <Container>
        <SectionHeader
          slogan="Whats the function"
          title="Let’s see how it works"
          isBlack={true}
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <Box sx={styles.card} key={item.id}>
              <Box sx={styles.iconBox1}>{`0${item.id}`}</Box>
              <Box sx={styles.wrapper}>
                <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  workflow: {
    // backgroundColor: 'primary',
    // backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    py: [8, null, 9, null, null, 10],
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      right: 0,
      // background:
        // 'linear-gradient(-45deg, rgba(42,72,125, 0.3) 25%, transparent 25%, transparent 50%, rgba(42,72,125, 0.3) 50%, rgba(42,72,125, 0.3) 75%, transparent 75%, transparent)',
      width: '100%',
      backgroundSize: '350px 350px',
      height: '100%',
      opacity: 0.3,
      zIndex: 0,
    },
  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: [
      '35px 0',
      null,
      '45px 50px',
      null,
      '50px 25px',
      null,
      null,
      '50px 65px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
  card: {
    display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',
    textAlign: ['center', null, 'left'],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    // left:230,
    left:180,
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 75, null, 100],
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'center center',
      width: 215,
      height: 60,
      opacity: 0.3,
      '@media screen and (max-width:1220px)': {
        display: 'none',
      },
    },
    // '&:nth-of-type(2n-1)::before': {
    //   backgroundImage: `url(${ArrowOdd})`,
    //   left: 20,
    // },
    // '&:nth-of-type(2n)::before': {
    //   backgroundImage: `url(${ArrowEven})`,
    //   top: 17,
    //   left: 20,
    // },
    // '&:last-child::before': {
    //   display: 'none',
    // },
  },

  iconBox1: {
    width: ['50px', null, '60px', null, null, '70px'],
    height: ['50px', null, '60px', null, null, '70px'],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 21],
    backgroundColor: '#8C9AB1',
    display: 'flex',
    alignItems: 'center',
    mb: [5, null, null, null, null, 6],
    mx: ['auto', null, 0],
    fontSize: [6, null, 7, null, null, '30px'],
    fontWeight: 700,
    justifyContent: 'center',
    color:'#ffffff',
    // color: '#234582',
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: 'black',
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3],
    },

    subTitle: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: 'black',
      opacity: 0.65,
      pr: [0, null, null, null, null, 5],
    },
  },
};
