import React, { useState, useEffect, useContext } from "react";
import { Background, ModalContainer, Item, Question, Answer } from "./styled";
import InfoService from "../../../../../../apis/info/info-service";
import { Context } from "../../../../../../utils/contextProvider";

const infoService = new InfoService();

const Modal = (props) => {
  const { value, contextDispatch } = useContext(Context);
  const [questionnaire, setQuestionnaire] = useState([]);

  const getQuestionnaireData = async () => {
    try {
      const { questionnaire } = await infoService.getUserQuestionnaire(
        props.id,
        value.accessToken,
        value.refreshToken
      );
      setQuestionnaire(questionnaire);
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

  const getArray = (e) => {
    var result = "";
    for (var i = 0; i < e.length; i++) {
      result += "- " + e[i] + "\n";
    }
    return result;
  };

  const isData = (e) => {
    if (e === undefined || JSON.stringify(e) === "[]") {
      console.log(questionnaire);
      return false;
    } else {
      console.log(e);
      return true;
    }
  };

  return (
    <Background sender={props.showModal} onClick={props.click}>
      {isData(questionnaire) && (
        <ModalContainer>
          <Item>
            <Question>1-1. 과거 5년 평균 체중: </Question>
            <Answer>
              {questionnaire.additional_weight.avg_over_last_5y}kg
            </Answer>
          </Item>
          <Item>
            <Question>1-2. 최저 체중: </Question>
            <Answer>{questionnaire.additional_weight.min_since_age20}kg</Answer>
          </Item>
          <Item>
            <Question>2. 회원 목표: </Question>
            <Answer>{getArray(questionnaire.goal)}</Answer>
          </Item>
          <Item>
            <Question>3. 월경 주기: </Question>
            <Answer>{questionnaire.menstrual_cycle}</Answer>
          </Item>
          <Item>
            <Question>4-1. 출산 경험: </Question>
            <Answer>{getChildBirth(questionnaire.childbirth)}</Answer>
          </Item>
          <Item>
            <Question>4-2. 현재 임신 여부: </Question>
            <Answer>{getPregnancy(questionnaire.during_pregnancy)}</Answer>
          </Item>
          <Item>
            <Question>5. 식습관, 생활습관(규칙적): </Question>
            <Answer>{questionnaire.lifestyle}</Answer>
          </Item>
          <Item>
            <Question>6. 식사 종류(밥/밀가루): </Question>
            <Answer>{questionnaire.eating_category}</Answer>
          </Item>
          <Item>
            <Question>7. 식사 구성: </Question>
            <Answer>{getArray(questionnaire.eating_habits)}</Answer>
          </Item>
          <Item>
            <Question>8. 식사 횟수: </Question>
            <Answer>{questionnaire.number_of_eating}</Answer>
          </Item>
          <Item>
            <Question>9. 커피 섭취 여부: </Question>
            <Answer>{questionnaire.number_of_coffee}</Answer>
          </Item>
          <Item>
            <Question>10. 질병 정보: </Question>
            <Answer>{getArray(questionnaire.diseases)}</Answer>
          </Item>
        </ModalContainer>
      )}
      ;
    </Background>
  );
};

export default Modal;
