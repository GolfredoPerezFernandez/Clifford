

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
    fontSize: 28,
    textAlign: 'right',
    color: 'white',
    alignSelf: 'center'
  }),
  titleStyle: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 18,
    textAlign: 'right',
    color: 'white',
    alignSelf: 'center'
  }),
  titleStyle5rojo: RX.Styles.createTextStyle({
    font: Fonts.displayRegular,
    fontSize: 16,
    textAlign: "right",
    color: 'red',
    alignSelf: 'center'
  }),
  titleStyle5naranja: RX.Styles.createTextStyle({
    font: Fonts.displayRegular,
    fontSize: 16,
    textAlign: "right",
    color: 'orange',
    alignSelf: 'center'
  }),
  titleStyle5verde: RX.Styles.createTextStyle({
    font: Fonts.displayRegular,
    fontSize: 16,
    textAlign: "right",
    color: 'green',
    alignSelf: 'center'
  }),
  titleStyle53: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 16,
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

import { AiOutlineNumber } from "@react-icons/all-files/ai/AiOutlineNumber";

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


export const AboutHook = ({
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
  const options = {
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
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'white',
      }
    ],
  };
  useEffect(() => {
    console.log("storage " + JSON.stringify(RX.Storage.getItem('pay')))
  }, [])
  return (<RX.View style={{ flex: 1, backgroundColor: '#1A2034' }} >
    <RX.Text style={[_styles.titleStyleBig, { alignSelf: 'flex-start', marginTop: 50, marginLeft: 50 }]} >
      {"Burns"}
    </RX.Text>
    <RX.View style={{ flex: 30, alignSelf: 'stretch', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <UI.Paper elevation={10} style={{ root: { justifyContent: "flex-start", alignItems: "flex-start", borderRadius: 18, width: 270, backgroundColor: '#1F293D', height: 110 } }} >

        <RX.View style={{ flexDirection: 'row', marginLeft: 10, justifyContent: 'center', alignItems: 'center', }}>
          <RX.View >
            <UI.Paper style={{ root: { justifyContent: "center", alignItems: "center", borderRadius: 18, width: 50, backgroundColor: 'white', marginRight: 20, height: 50 } }} >

              <FaBalanceScale color={'#1F293D'} style={{ width: 18, height: 18 }} />

            </UI.Paper>
          </RX.View>
          <RX.View>
            <RX.Text style={[_styles.titleStyle5, { alignSelf: 'flex-end', marginRight: 20, marginTop: 10, marginBottom: 10 }]} >
              {"Total $CLIFF Burned"}
            </RX.Text>

            <RX.Text style={[_styles.titleStyle, { alignSelf: 'flex-end', marginRight: 20, marginBottom: 10 }]} >
              {"$152,318,954,184"}
            </RX.Text></RX.View>
        </RX.View>
        <RX.View style={{ flexDirection: 'row', marginLeft: 20, alignSelf: 'flex-start' }}>
          <RX.Text style={[_styles.titleStyle5rojo, { marginRight: 10 }]} >
            {"+3,721,152"}
          </RX.Text>
          <RX.Text style={[_styles.titleStyle5, {}]} >
            {"Burned Today"}
          </RX.Text>
        </RX.View>
      </UI.Paper>
      <UI.Paper elevation={10} style={{ root: { justifyContent: "flex-start", marginLeft: 20, marginRight: 20, alignItems: "flex-start", borderRadius: 18, width: 270, backgroundColor: '#1F293D', height: 110 } }} >

        <RX.View style={{ marginLeft: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
          <RX.View >
            <UI.Paper style={{ root: { justifyContent: "center", alignItems: "center", borderRadius: 18, width: 50, backgroundColor: '#F99426', marginRight: 20, height: 50 } }} >
              <GiBurningEmbers color={'white'} style={{ width: 18, height: 18 }} />

            </UI.Paper>
          </RX.View>
          <RX.View>
            <RX.Text style={[_styles.titleStyle5, { alignSelf: 'flex-end', marginRight: 20, marginTop: 10, marginBottom: 10 }]} >
              {"Total $USD Burned"}
            </RX.Text>

            <RX.Text style={[_styles.titleStyle, { alignSelf: 'flex-end', marginRight: 20, marginBottom: 10 }]} >
              {"$112,714,029.46"}
            </RX.Text></RX.View>
        </RX.View>
        <RX.View style={{ flexDirection: 'row', marginLeft: 20, alignSelf: 'flex-start' }}>
          <RX.Text style={[_styles.titleStyle5naranja, { marginRight: 10 }]} >
            {"15.23%"}
          </RX.Text>
          <RX.Text style={[_styles.titleStyle5, {}]} >
            {"($CLIFF) Burned"}
          </RX.Text>
        </RX.View>
      </UI.Paper>  <UI.Paper elevation={10} style={{ root: { justifyContent: "flex-start", alignItems: "flex-start", borderRadius: 18, width: 270, backgroundColor: '#1F293D', height: 110 } }} >

        <RX.View style={{ marginLeft: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
          <RX.View >
            <UI.Paper style={{ root: { justifyContent: "center", alignItems: "center", borderRadius: 18, width: 50, backgroundColor: 'green', marginRight: 20, height: 50 } }} >

              <AiOutlineNumber color={'white'} style={{ width: 18, height: 18 }} />

            </UI.Paper>
          </RX.View>
          <RX.View>
            <RX.Text style={[_styles.titleStyle5, { alignSelf: 'flex-end', marginRight: 20, marginTop: 10, marginBottom: 10 }]} >
              {"Number of Burns"}
            </RX.Text>

            <RX.Text style={[_styles.titleStyle, { alignSelf: 'flex-end', marginRight: 20, marginBottom: 10 }]} >
              {"201"}
            </RX.Text></RX.View>
        </RX.View>
        <RX.View style={{ flexDirection: 'row', marginLeft: 20, alignSelf: 'flex-start' }}>
          <RX.Text style={[_styles.titleStyle5rojo, { marginRight: 10 }]} >
            {""}
          </RX.Text>
          <RX.Text style={[_styles.titleStyle5, {}]} >
            {""}
          </RX.Text>
        </RX.View>
      </UI.Paper>  <UI.Paper elevation={10} style={{ root: { marginLeft: 20, marginRight: 20, justifyContent: "flex-start", alignItems: "flex-start", borderRadius: 18, width: 270, backgroundColor: '#1F293D', height: 110 } }} >

        <RX.View style={{ marginLeft: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
          <RX.View >
            <UI.Paper style={{ root: { justifyContent: "center", alignItems: "center", borderRadius: 18, width: 50, backgroundColor: '#E60929', marginRight: 20, height: 50 } }} >
              <MdAttachMoney color={'white'} style={{ width: 18, height: 18 }} />

            </UI.Paper>
          </RX.View>
          <RX.View>
            <RX.Text style={[_styles.titleStyle5, { alignSelf: 'flex-end', marginRight: 20, marginTop: 10, marginBottom: 10 }]} >
              {"Average Burn (BUSD)"}
            </RX.Text>

            <RX.Text style={[_styles.titleStyle, { alignSelf: 'flex-end', marginRight: 20, marginBottom: 10 }]} >
              {"$91,307.79"}
            </RX.Text>
          </RX.View>
        </RX.View>    <RX.View style={{ flexDirection: 'row', marginLeft: 20, alignSelf: 'flex-start' }}>
          <RX.Text style={[_styles.titleStyle5rojo, { marginRight: 10 }]} >
            {""}
          </RX.Text>
          <RX.Text style={[_styles.titleStyle5, {}]} >
            {""}
          </RX.Text>
        </RX.View>
      </UI.Paper>
    </RX.View>
    <RX.View style={{ flex: 70, alignSelf: 'stretch', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

      <UI.Paper elevation={10} style={{ root: { justifyContent: "center", alignItems: "center", borderRadius: 18, width: 900, backgroundColor: '#1F293D', height: 350 } }} >
        <TodoListPanel4
          selectedTodoId={""}
          onSelect={_onSelectTodo} onCreateNew={_onSelectTodo2} />

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
  </RX.View>

  );
};

const _onSelectTodo2 = () => {
  NavContextStore.navigateToTodoList(undefined, false);
};
const _onSelectTodo = (todoId: string) => {
  NavContextStore.navigateToTodoList(todoId, false);
};

import * as RX from 'reactxp'
import { useEffect } from 'react';
import TodoListPanel4 from './TodoListPanel4';
import NavContextStore from '../stores/NavContextStore';

