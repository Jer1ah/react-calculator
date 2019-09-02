import React from 'react';
import styles from './CalcBody.css';
import Counter from '../Counter/Counter';
import FlexRow from '../Hoc/FlexRow';
import ClearButton from '../Buttons/ClearButton/ClearButton';
import BlankButton from '../Buttons/BlankButton/BlankButton';
import DivideButton from '../Buttons/DivideButton/DivideButton';
import MultiplyButton from '../Buttons/MultiplyButton/MultiplyButton';
import MinusButton from '../Buttons/MinusButton/MinusButton';
import PlusButton from '../Buttons/PlusButton/PlusButton';
import EqualButton from '../Buttons/EqualButton/EqualButton';
import PeriodButton from '../Buttons/Numbers/Period';
import ZeroButton from '../Buttons/Numbers/Zero';
import OneButton from '../Buttons/Numbers/One';
import TwoButton from '../Buttons/Numbers/Two';
import ThreeButton from '../Buttons/Numbers/Three';
import FourButton from '../Buttons/Numbers/Four';
import FiveButton from '../Buttons/Numbers/Five';
import SixButton from '../Buttons/Numbers/Six';
import SevenButton from '../Buttons/Numbers/Seven';
import EightButton from '../Buttons/Numbers/Eight';
import NineButton from '../Buttons/Numbers/Nine';

const calcBody = (props) => {
    return (
        <div className={styles.calculator}>
            <Counter total={props.total}/>
            <FlexRow styling={styles.flex}>
                <ClearButton clearTotal={props.clearTotal}/>
                <BlankButton content="MA"/>
                <BlankButton content="TH"/>
                <DivideButton divide={props.divideHandler}/>
            </FlexRow>
            <FlexRow styling={styles.flex}>
                <SevenButton click={props.clicked}/>
                <EightButton click={props.clicked}/>
                <NineButton click={props.clicked}/>
                <MultiplyButton multiply={props.multiplyHandler}/>
            </FlexRow>
            <FlexRow styling={styles.flex}>
                <FourButton click={props.clicked}/>
                <FiveButton click={props.clicked}/>
                <SixButton click={props.clicked}/>
                <MinusButton minus={props.minusHandler}/>
            </FlexRow>
            <FlexRow styling={styles.flex}>
                <OneButton click={props.clicked}/>
                <TwoButton click={props.clicked}/>
                <ThreeButton click={props.clicked}/>
                <PlusButton add={props.addHandler}/>
            </FlexRow>
            <FlexRow styling={styles.flex}>
                <ZeroButton click={props.clicked}/>
                <PeriodButton click={props.clicked}/>
                <EqualButton equals={props.equalHandler}/>
            </FlexRow>
        </div>
    );
};

export default calcBody;