import { http, HttpResponse } from "msw";

export const handlers = [
  http.get(`${process.env.NEXT_PUBLIC_BASE_URL}/study`, () => {
    return HttpResponse.json({
      data: {
        studyDatas: [
          {
            id: 1,
            keywords: ["사랑", "입추", "삼계탕"],
            title: "[팬들에게 보내는 편지]의 학습 자료",
            url: "/study/1",
            createdAt: "2024-08-15 00:00:00",
          },
          {
            id: 2,
            keywords: ["빙수", "더위", "킹받다"],
            title: "[오늘 너무 더워요]의 학습 자료",
            url: "/study/1",
            createdAt: "2024-08-17 00:00:00",
          },
          {
            id: 3,
            keywords: ["유투브", "재밌다"],
            title: "[유투브 영상이 올라왔어요]의 학습 자료",
            url: "/study/1",
            createdAt: "2024-08-18 00:00:00",
          },
          {
            id: 4,
            keywords: ["오늘", "새로운", "축하"],
            title: "[그냥 저냥]의 학습 자료",
            url: "/study/1",
            createdAt: "2024-08-19 00:00:00",
          },
          {
            id: 5,
            keywords: ["축가", "친구", "감동"],
            title: "[오늘 너무 더워요]의 학습 자료",
            url: "/study/1",
            createdAt: "2024-08-21 00:00:00",
          },
          {
            id: 6,
            keywords: ["빙수", "더위", "킹받다"],
            title: "[오늘은...]의 학습 자료",
            url: "/study/1",
            createdAt: "2024-08-24 00:00:00",
          },
          {
            id: 7,
            keywords: ["유명한", "음식", "꿀맛"],
            title: "[다들 점심 먹었어여?]의 학습 자료",
            url: "/study/1",
            createdAt: "2024-08-26 00:00:00",
          },
          {
            id: 8,
            keywords: ["휴가", "기차", "저멀리"],
            title: "[오늘 너무 더워요]의 학습 자료",
            url: "/study/1",
            createdAt: "2024-08-28 00:00:00",
          },
          {
            id: 9,
            keywords: ["가족", "오랜만", "행복"],
            title: "[하이]의 학습 자료",
            url: "/study/1",
            createdAt: "2024-08-29 00:00:00",
          },
          {
            id: 10,
            keywords: ["다들", "축제", "신났다"],
            title: "[뭐했을까요?]의 학습 자료",
            url: "/study/1",
            createdAt: "2024-08-30 00:00:00",
          },
          {
            id: 11,
            keywords: ["상의", "생각", "추천"],
            title: "[뭐 입을까요?]의 학습 자료",
            url: "/study/1",
            createdAt: "2024-09-01 00:00:00",
          },
        ],
      },
    });
  }),
];
