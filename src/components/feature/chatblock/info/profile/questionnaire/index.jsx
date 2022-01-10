import React, { useState, useEffect } from 'react';
import { Background, ModalContainer, ModalText, Question, Answer } from './styled';
import InfoService from "../../../../../../apis/info/info-service";

const infoService = new InfoService();

const Modal = (props) => {
	const [questionnaire, setQuestionnaire] = useState([]);

  const getQuestionnaireData = async () => {
    try {
      const { questionnaire } = await infoService.getUserQuestionnaire(props.id);
      setQuestionnaire(questionnaire);
      console.log(questionnaire);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getQuestionnaireData();
  }, [props.id]);

  const getChildBirth = (e) => {
    if (e.has) {
      return "예 - " + e.last_year;
    } else {
      return "아니오";
    }
  };

  const getPregnancy = (e) => {
    if (e) {
      return "예";
    } else {
      return "아니오";
    }
  };

  const getUserGoal = (e) => {
    var result = "";
    for ( var i = 0; i < e.length; i++) {
      result += e[i];
      if (i !== e.length - 1) {
        result += ", ";
      }
    }
    return result;
  }

  const isData = (e) => {
    if (e === undefined || JSON.stringify(e) === "[]") {
      return false;
    } else { 
      return true;
    }
  };

  return (
    <Background sender={props.showModal} onClick={props.click}>
      {isData(questionnaire) &&
        <ModalContainer>
          <Question>1-1. 현재 체중: <Answer>{questionnaire.body_info.weight.now}kg</Answer></Question>
          <Question>1-2. 목표 체중: <Answer>{questionnaire.body_info.weight.goal}kg</Answer></Question>
          <Question>1-3. 과거 5년 평균 체중: <Answer>{questionnaire.body_info.weight.avg_over_last_5y}kg</Answer></Question>
          <Question>1-4. 최저 체중: <Answer>{questionnaire.body_info.weight.min_since_age20}kg</Answer></Question>
          <Question>2. 회원 목표: <Answer>{getUserGoal(questionnaire.goal)}</Answer></Question>
          <Question>3. 월경 주기: <Answer>{questionnaire.menstrual_cycle}</Answer></Question>
          <Question>4-1. 출산 경험: <Answer>{getChildBirth(questionnaire.childbirth)}</Answer></Question>
          <Question>4-2. 현재 임신 여부: <Answer>{getPregnancy(questionnaire.during_pregnancy)}</Answer></Question>
          <Question>5. 식습관, 생활습관(규칙적): <Answer>{questionnaire.lifestyle}</Answer></Question>
          <Question>6. 식사 종류(밥/밀가루): <Answer>{questionnaire.eating_category}</Answer></Question>
          <Question>7. 식사 구성: <Answer>{questionnaire.eating_habits}</Answer></Question>
          <Question>8. 하루 식사 횟수: <Answer>{questionnaire.number_of_eating}</Answer></Question>
          <Question>9. 커피 섭취 여부: <Answer>{questionnaire.number_of_coffee}</Answer></Question>
          <Question>10. 질병 정보: <Answer>{questionnaire.diseases.name}</Answer></Question>
        </ModalContainer>
      };
    </Background>
  );
};

// Modal.propTypes = {
//   visible: PropTypes.bool,
// }


export default Modal;