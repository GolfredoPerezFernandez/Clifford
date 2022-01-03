

import { Fonts, FontSizes, } from '../app/Styles';

const _styles = {
  slider: RX.Styles.createViewStyle({
    alignSelf: 'center',
    overflow: 'hidden' // for custom animations
  }),
  sliderContentContainer: RX.Styles.createViewStyle({
    alignSelf: 'center'
  }),
  titleStyle55: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    alignSelf: 'center'
  }),
  titleStyle0: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    alignSelf: 'center'
  }),
  titleStyleBig: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 24,
    textAlign: 'right',
    color: 'white',
    alignSelf: 'center'
  }),
  titleStyle: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 22,
    textAlign: 'right',
    color: 'white',
    alignSelf: 'center'
  }),
  titleStyle5rojo: RX.Styles.createTextStyle({
    font: Fonts.displayRegular,
    fontSize: 14,
    textAlign: "right",
    color: 'red',
    alignSelf: 'center'
  }),
  titleStyle5naranja: RX.Styles.createTextStyle({
    font: Fonts.displayRegular,
    fontSize: 14,
    textAlign: "right",
    color: 'orange',
    alignSelf: 'center'
  }),
  titleStyle5verde: RX.Styles.createTextStyle({
    font: Fonts.displayRegular,
    fontSize: 14,
    textAlign: "right",
    color: 'green',
    alignSelf: 'center'
  }),
  titleStyle53: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 14,
    textAlign: "right",
    color: 'white',
    alignSelf: 'center'
  }),
  titleStyle5: RX.Styles.createTextStyle({
    font: Fonts.displayRegular,
    fontSize: 14,
    textAlign: "right",
    color: 'white',
    alignSelf: 'center'
  }),
  titleStyle2s: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 32,
    textAlign: 'left',
    color: 'white',
    alignSelf: 'flex-start'
  }),
  titleStyle2s2: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 32,
    textAlign: 'left',
    color: '#FF296D',
    alignSelf: 'flex-start'
  }),
  titleStyle2: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 40,
    textAlign: 'center',
    color: 'black',
    alignSelf: 'center'
  }),
  titleStyle22: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 32,
    textAlign: 'left',
    color: 'white',
    alignSelf: 'center'
  }),
  titleStyle3: RX.Styles.createTextStyle({
    font: Fonts.displayRegular,
    fontSize: 14,
    width: 500,
    textAlign: 'center',
    color: 'white',
    marginBottom: 30,
    alignSelf: 'center'
  }),
  titleStyle4: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 46,
    textAlign: 'left',
    color: 'white',
    alignSelf: 'center'
  }),
  titleStyle33: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 40,
    textAlign: 'left',
    color: 'white',
    alignSelf: 'flex-start'
  }),
  titleStyle33s: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 32,
    textAlign: 'left',
    color: '#FF296D',
    alignSelf: 'flex-start'
  }),
  buttomStyle: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center'
  }),
  contentStyle: RX.Styles.createTextStyle({
    font: Fonts.displayRegular,
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center'
  }),
  contentStyle2: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center'
  }),
  contentStyle3: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center'
  }),
  label: RX.Styles.createTextStyle({
    font: Fonts.displayRegular,
    fontSize: FontSizes.size14,
    color: 'white',
  })
}

interface Entries {
  img: string;
  imgText: string;
  title: string;
  content: string;
}
import { Line } from 'react-chartjs-2';

import ImageSource from 'modules/images';

const { Carousel } = require('reactxp-carousel')




interface Entries {
  img: string;
  imgText: string;
  title: string;
  content: string;
}
import { FaBalanceScale } from "@react-icons/all-files/fa/FaBalanceScale";
import { AiFillHeart } from "@react-icons/all-files/ai/AiFillHeart";

import { MdAttachMoney } from "@react-icons/all-files/md/MdAttachMoney";

import { GiBurningEmbers } from "@react-icons/all-files/gi/GiBurningEmbers";

import * as UI from '@sproutch/ui';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
const faker = require('faker');

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement
);

import { ResponsiveBar } from '@nivo/bar'

export const HomeHook = ({
  entries,
  isStackNav,
  width,
  len,
}: {
  entries: Entries[];
  width: number;
  isStackNav: boolean;
  len: string;
}) => {

  const options2 = {

    borderRadius: 4,
    plugins: {
      title: {
        display: false,

        text: 'Chart.js Bar Chart - Stacked',
      },
      legend: {
        fontColor: "white",
        display: false,
      },

    },

  };
  const options = {
    scales: {
      x: {
        grid: {
          color: 'white',
          borderDash: [5, 5],
          borderColor: 'white',
          tickColor: 'white',
          borderWidth: 0.1
        },
        barPercentage: 0.7,
        ticks: {
          color: 'white',
          padding: 10,
        }
      },
      y: {
        grid: {
          color: 'white',
          borderDash: [5, 5],
          borderColor: 'white',
          tickColor: 'white',
          borderWidth: 0.1
        },
        ticks: {
          color: 'white',
          padding: 10,
        }
      }
    },
    plugins: {
      title: {
        display: false,

        text: 'Chart.js Bar Chart - Stacked',
      },

      legend: {
        display: false,
      },

    },

  };
  const labels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const data = {
    labels,
    datasets: [

      {

        barPercentage: 0.5,

        maxBarThickness: 8,
        label: 'Dataset 1',
        borderRadius: 14,
        color: 'white',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'white',
      }
    ],
  };
  useEffect(() => {
    console.log("storage " + JSON.stringify(RX.Storage.getItem('pay')))
  }, [])
  return (<RX.View style={{ flex: 1, backgroundColor: '#1A2034' }} >
    <RX.Text style={[_styles.titleStyleBig, { alignSelf: 'flex-start', marginTop: 50, marginLeft: 20 }]} >
      {"Dashboard"}
    </RX.Text>
    <RX.View style={{ flex: 30, marginTop: 20, paddingBottom: 20, marginBottom: 10, alignSelf: 'stretch', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
      <RX.View style={{ position: 'relative', marginBottom: 30, height: 200, width: 300, justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-start', }}>

        <UI.Paper elevation={10} style={{ root: { elevation: 0, position: 'absolute', justifyContent: "center", alignItems: "flex-end", borderRadius: 18, width: 280, backgroundColor: '#1F293D', height: 150 } }} >

          <RX.View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>

            <RX.View>
              <RX.Text style={[_styles.titleStyle5, { alignSelf: 'flex-end', marginRight: 20, marginTop: 10, marginBottom: 0 }]} >
                {"Total Market Cap"}
              </RX.Text>

              <RX.Text style={[_styles.titleStyle, { alignSelf: 'flex-end', marginRight: 20, marginBottom: 10 }]} >
                {"$112,714,029.46"}
              </RX.Text></RX.View>
          </RX.View>
          <RX.View style={{ width: 260, opacity: 0.5, alignSelf: 'center', height: 1, marginBottom: 15, backgroundColor: 'white' }} />
          <RX.View style={{ flexDirection: 'row', marginLeft: 20, alignSelf: 'flex-start' }}>
            <RX.Text style={[_styles.titleStyle5rojo, { marginRight: 10 }]} >
              {"-0.99%"}
            </RX.Text>
            <RX.Text style={[_styles.titleStyle5, {}]} >
              {"than yesterday"}
            </RX.Text>
          </RX.View>
        </UI.Paper>
        <RX.View style={{ position: 'absolute', marginRight: 180, marginBottom: 130, }}>
          <UI.Paper style={{ root: { elevation: 1, justifyContent: "center", alignItems: "center", borderRadius: 14, width: 65, backgroundColor: '#303950', marginLeft: 0, height: 65 } }} >

            <FaBalanceScale color={'white'} style={{ width: 24, height: 24 }} />

          </UI.Paper>

        </RX.View>

      </RX.View>
      <RX.View style={{ position: 'relative', marginBottom: 30, height: 200, width: 300, justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-start', }}>

        <UI.Paper elevation={10} style={{ root: { elevation: 0, position: 'absolute', justifyContent: "center", alignItems: "flex-end", borderRadius: 18, width: 280, backgroundColor: '#1F293D', height: 150 } }} >

          <RX.View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>

            <RX.View>
              <RX.Text style={[_styles.titleStyle5, { alignSelf: 'flex-end', marginRight: 20, marginTop: 10, marginBottom: 0 }]} >
                {"Total Burn"}
              </RX.Text>

              <RX.Text style={[_styles.titleStyle, { alignSelf: 'flex-end', marginRight: 20, marginBottom: 10 }]} >
                {"$18,527,896.53"}
              </RX.Text></RX.View>
          </RX.View>
          <RX.View style={{ width: 260, opacity: 0.5, alignSelf: 'center', height: 1, marginBottom: 15, backgroundColor: 'white' }} />
          <RX.View style={{ flexDirection: 'row', marginLeft: 20, alignSelf: 'flex-start' }}>
            <RX.Text style={[_styles.titleStyle5naranja, { marginRight: 10 }]} >
              {"15.26%"}
            </RX.Text>
            <RX.Text style={[_styles.titleStyle5, {}]} >
              {"($CLIFF) Burned"}
            </RX.Text>
          </RX.View>
        </UI.Paper>
        <RX.View style={{ position: 'absolute', marginRight: 180, marginBottom: 130, }}>
          <UI.Paper style={{ root: { elevation: 1, justifyContent: "center", alignItems: "center", borderRadius: 14, width: 65, backgroundColor: '#F98E21', marginLeft: 0, height: 65 } }} >

            <GiBurningEmbers color={'white'} style={{ width: 24, height: 24 }} />

          </UI.Paper>

        </RX.View>

      </RX.View>
      <RX.View style={{ position: 'relative', marginBottom: 30, height: 200, width: 300, justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-start', }}>

        <UI.Paper elevation={10} style={{ root: { elevation: 0, position: 'absolute', justifyContent: "center", alignItems: "flex-end", borderRadius: 18, width: 280, backgroundColor: '#1F293D', height: 150 } }} >

          <RX.View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>

            <RX.View>
              <RX.Text style={[_styles.titleStyle5, { alignSelf: 'flex-end', marginRight: 20, marginTop: 10, marginBottom: 0 }]} >
                {"Total Market Cap"}
              </RX.Text>

              <RX.Text style={[_styles.titleStyle, { alignSelf: 'flex-end', marginRight: 20, marginBottom: 10 }]} >
                {"$112,714,029.46"}
              </RX.Text></RX.View>
          </RX.View>
          <RX.View style={{ width: 260, opacity: 0.5, alignSelf: 'center', height: 1, marginBottom: 15, backgroundColor: 'white' }} />
          <RX.View style={{ flexDirection: 'row', marginLeft: 20, alignSelf: 'flex-start' }}>
            <RX.Text style={[_styles.titleStyle5rojo, { marginRight: 10 }]} >
              {"-0.99%"}
            </RX.Text>
            <RX.Text style={[_styles.titleStyle5, {}]} >
              {"than yesterday"}
            </RX.Text>
          </RX.View>
        </UI.Paper>
        <RX.View style={{ position: 'absolute', marginRight: 180, marginBottom: 130, }}>
          <UI.Paper style={{ root: { elevation: 1, justifyContent: "center", alignItems: "center", borderRadius: 14, width: 65, backgroundColor: '#E60929', marginLeft: 0, height: 65 } }} >

            <MdAttachMoney color={'white'} style={{ width: 24, height: 24 }} />

          </UI.Paper>

        </RX.View>

      </RX.View>

    </RX.View >
    <RX.View style={{ flex: 70, alignSelf: 'stretch', marginTop: 20, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>

      <UI.Paper elevation={10} style={{ root: { justifyContent: "center", alignItems: "center", borderRadius: 18, width: 400, backgroundColor: '#1F293D', height: 300 } }} >

        <RX.View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
          <RX.View >
            <UI.Paper style={{ root: { justifyContent: "center", alignItems: "center", borderRadius: 8, width: 380, backgroundColor: '#F98E21', height: 200 } }} >

              <Bar options={options} data={data} />
            </UI.Paper>
          </RX.View>
          <RX.View style={{ alignSelf: 'flex-start' }}>
            <RX.Text style={[_styles.titleStyle53, { marginTop: 10, alignSelf: 'flex-start', }]} >
              {"Daily Burns"}
            </RX.Text>

            <RX.Text style={[_styles.titleStyle5, { alignSelf: 'flex-start', }]} >
              {"Number of $CLIFF Burned Daily"}
            </RX.Text>
          </RX.View>
        </RX.View>
      </UI.Paper>
      <UI.Paper elevation={10} style={{ root: { marginLeft: 40, justifyContent: "center", alignItems: "center", borderRadius: 18, width: 400, backgroundColor: '#1F293D', height: 300 } }} >

        <RX.View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
          <RX.View >
            <UI.Paper style={{ root: { backgroundColor: '#1F293D', justifyContent: "center", alignItems: "center", borderRadius: 8, width: 380, height: 200 } }} >

              <Line options={options2} data={data} />
            </UI.Paper>
          </RX.View>
          <RX.View style={{ alignSelf: 'flex-start' }}>
            <RX.Text style={[_styles.titleStyle53, { marginTop: 10, alignSelf: 'flex-start', }]} >
              {"Marketing Wallet"}
            </RX.Text>

            <RX.Text style={[_styles.titleStyle5, { alignSelf: 'flex-start', }]} >
              {"Portfolio Value in $US"}
            </RX.Text>
          </RX.View>
        </RX.View>
      </UI.Paper>
    </RX.View>
    <RX.View style={{ flexDirection: 'row', marginLeft: 30, marginBottom: 30 }}>

      <RX.Text style={[_styles.titleStyle5, {}]} >

        {"© 2022, made with"}
      </RX.Text>
      <AiFillHeart color={'white'} style={{ width: 16, height: 16, marginTop: 4, marginRight: 5, marginLeft: 5 }} />

      <RX.Text style={[_styles.titleStyle5, {}]} >

        {"by "}
      </RX.Text>
      <RX.Text style={[_styles.titleStyle53, {}]} >

        {"Clifford Inu "}
      </RX.Text>
      <RX.Text style={[_styles.titleStyle5, {}]} >

        {"to never stops pumping."}
      </RX.Text>

    </RX.View>
  </RX.View >

  );
};

import * as RX from 'reactxp'
import { useEffect } from 'react';

