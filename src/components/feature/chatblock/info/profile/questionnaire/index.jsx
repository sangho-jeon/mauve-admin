import React, { useState, useEffect, useContext } from "react";
import { Background, ModalContainer, Item, Question, Answer } from "./styled";
import InfoService from "../../../../../../apis/info/info-service";
import { Context } from "../../../../../../utils/contextProvider";

const infoService = new InfoService();

const Modal = (props) => {
  const { value, contextDispatch } = useContext(Context);
  const [questionnaire, setQuestionnaire] = useState([]);

  const goal = ["건강 관리", "체지방 감량", "식습관 개선", "월경 주기 안정화"]
  const menstrual_cycle = ["주기가 일정한 편이에요 (1~2일 차이)", "주기가 종종 바뀌어요 (3일 이상 차이)", "주기의 편차가 심해요 (5일 이상 차이)"]
  const lifestyle = ["식습관이 규칙적이며 주기적인 운동을 하고 활동적인 편이에요", "식습관은 규칙적이지만 활동량은 부족한 편이에요", "식습관은 불규칙하지만 주기적인 운동을 하고 활동적인 편이에요", "식습관이 불규칙하고 활동량도 부족한 편이에요"]
  const eating_category = ["정제 탄수화물 (빵, 면, 떡, 시리얼, 밀가루 등)", "복합 탄수화물 (잡곡, 현미, 통밀, 고구마, 곤약 등)", "고기 (단백질+지방)", "섬유질 (야채 및 샐러드)", "골고루 먹는 편이에요"]
  const eating_habits = ["밥 보다는 반찬 위주로 식사를 하는 편이에요", "담백한 음식을 좋아하고 간을 싱겁게 해서 먹는 편이에요", "맵고 짜고 자극적인 음식을 자주 먹는 편이에요", "식사 외 간식이나 단 음료를 자주 먹는 편이에요"]
  const drinking = ["아예 안 마셔요", "거의 안 마시는 편이에요 (한달에 1-2번 정도)", "아주 가끔 마셔요 (일주일에 1번 정도)", "일주일에 3회 이상 마셔요", "하루 한 잔은 꼭 마셔요"]

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

  const getArray = (array, item) => {
    var result = "";
    for (const i of item) {
      result += " - " + array[i];
    }
    return result;
  };

  const isData = (e) => {
    if (e === undefined || JSON.stringify(e) === "[]") {
      return false;
    } else {
      return true;
    }
  };

  return (
    <Background sender={props.showModal} onClick={props.click}>
      {isData(questionnaire) && (
        <ModalContainer>
          <Item>
            <Question>1. 회원 목표</Question>
            <Answer>{getArray(goal, questionnaire.goal)}</Answer>
          </Item>
          <Item>
            <Question>2-1. 과거 5년 평균 체중</Question>
            <Answer>{questionnaire.weight.avg_over_last_5y}kg</Answer>
          </Item>
          <Item>
            <Question>2-2. 최저 체중</Question>
            <Answer>{questionnaire.weight.min_since_age20}kg</Answer>
          </Item>
          <Item>
            <Question>3. 식습관/생활습관</Question>
            <Answer>{lifestyle[questionnaire.lifestyle]}</Answer>
          </Item>
          <Item>
            <Question>4. 평소 식사 형태</Question>
            <Answer>{eating_category[questionnaire.eating_category]}</Answer>
          </Item>
          <Item>
            <Question>5. 자세한 식사 습관</Question>
            <Answer>{getArray(eating_habits, questionnaire.eating_habits)}</Answer>
          </Item>
          <Item>
            <Question>6. 음주 빈도</Question>
            <Answer>{drinking[questionnaire.drinking]}</Answer>
          </Item>
          <Item>
            <Question>7. 질병</Question>
            <Answer>{questionnaire.diseases}</Answer>
          </Item>
          <Item>
            <Question>8. 월경 주기</Question>
            <Answer>{menstrual_cycle[questionnaire.menstrual_cycle]}</Answer>
          </Item>
          <Item>
            <Question>9-1. 출산 경험</Question>
            <Answer>{questionnaire.childbirth.has ? "예 - " + questionnaire.childbirth.last_year : "아니오"}</Answer>
          </Item>
          <Item>
            <Question>9-2. 현재 임신 여부</Question>
            <Answer>{questionnaire.during_pregnancy ? "예" : "아니오"}</Answer>
          </Item>
        </ModalContainer>
      )}
      ;
    </Background>
  );
};

export default Modal;
