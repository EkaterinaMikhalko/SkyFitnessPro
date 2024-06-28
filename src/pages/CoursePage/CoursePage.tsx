// import yogaUrl from "./images/yoga";

// const images = {
//   [YOGA_COURSE]: yogaUrl,
// };
export default function CoursePage() {
  return (
    <div className="mx-[140px] my-[60px]">
      <div className="">
        <div className="w-[1160px] h-[310px] flex flex-row justify-between rounded-[20px]  bg-[#ffc700]">
          <div className="mt-10 ml-10">
            <p className="text-white text-6xl font-medium leading-16">Йога</p>
          </div>
          <img
            className="rounded-lg"
            src="/yoga.png"
            alt="course_picture"
            width="1023px"
            height="310px"
          />
        </div>
        <div className="pt-[60px] gap-x-[3.75rem]">
          <p className="text-4xl font-bold pb-[40px]">
            Подойдет для вас, если:
          </p>
          <div className="flex flex-row gap-4">
            <div className=" w-[368px] h-[141px] bg-black text-white p-[17px] rounded-[20px]">
              <div className="flex flex-row">
                <div className="flex items-center text-[#BCEC30] text-7xl pr-[25px]">
                  1
                </div>
                <p className="text-[24px]">
                  Давно хотели попробовать йогу, <br /> но не решались начать
                </p>
              </div>
            </div>
            <div className="w-[431px] h-[141px] bg-black text-white  p-[17px] rounded-[20px]">
              <div className="flex flex-row">
                <div className="flex items-center text-[#BCEC30] text-7xl pr-[25px]">
                  2
                </div>
                <div className="text-[24px]">
                  Хотите укрепить позвоночник, избавиться <br /> от болей в
                  спине и суставах
                </div>
              </div>
            </div>
            <div className="w-[327px] h-[141px]  bg-black text-white  p-[17px] rounded-[20px]">
              <div>
                <div className="flex flex-row">
                  <div className="flex items-center text-[#BCEC30] text-7xl pr-[25px] rounded-[20px]">
                    3
                  </div>
                  <div className="text-[24px]">
                    Ищете активность, полезную для тела <br /> и души
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <h1 className="pt-[60px] text-4xl font-bold mb-[40px]">
              Направления
            </h1>
            <div className="flex flex-row bg-[#BCEC30] w-[1160px] h-[146px] rounded-[20px] ">
              <div className="">
                <div className="flex flex-row pt-[30px] pl-[30px]">
                  <div className="w-[26px] h-[26px] pr-[5px]">
                    <svg
                      className=""
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.46373 1.36751C9.6202 0.704433 9.69843 0.372896 9.82424 0.298229C9.93259 0.233924 10.0674 0.233924 10.1758 0.298229C10.3016 0.372896 10.3798 0.704434 10.5363 1.36751L11.2997 4.60302C11.5837 5.80636 11.7257 6.40803 12.0343 6.89596C12.3071 7.32744 12.6726 7.69285 13.104 7.96574C13.592 8.27432 14.1936 8.4163 15.397 8.70025L18.6325 9.46373C19.2956 9.6202 19.6271 9.69843 19.7018 9.82424C19.7661 9.93259 19.7661 10.0674 19.7018 10.1758C19.6271 10.3016 19.2956 10.3798 18.6325 10.5363L15.397 11.2997C14.1936 11.5837 13.592 11.7257 13.104 12.0343C12.6726 12.3071 12.3071 12.6726 12.0343 13.104C11.7257 13.592 11.5837 14.1936 11.2997 15.397L10.5363 18.6325C10.3798 19.2956 10.3016 19.6271 10.1758 19.7018C10.0674 19.7661 9.93259 19.7661 9.82424 19.7018C9.69843 19.6271 9.6202 19.2956 9.46373 18.6325L8.70025 15.397C8.4163 14.1936 8.27432 13.592 7.96574 13.104C7.69285 12.6726 7.32744 12.3071 6.89596 12.0343C6.40803 11.7257 5.80636 11.5837 4.60301 11.2997L1.36751 10.5363C0.704433 10.3798 0.372896 10.3016 0.298229 10.1758C0.233924 10.0674 0.233924 9.93259 0.298229 9.82424C0.372896 9.69843 0.704434 9.6202 1.36751 9.46373L4.60302 8.70025C5.80636 8.4163 6.40803 8.27432 6.89596 7.96574C7.32744 7.69285 7.69285 7.32744 7.96574 6.89596C8.27432 6.40803 8.4163 5.80636 8.70025 4.60301L9.46373 1.36751Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div className="">
                    <p className="text-2xl">Йога для новичков</p>
                  </div>
                </div>
                <div className="flex flex-row pb-[30px] pl-[30px] pt-[34px]">
                  <div className="w-[26px] h-[26px] pr-[5px]">
                    <svg
                      className=""
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.46373 1.36751C9.6202 0.704433 9.69843 0.372896 9.82424 0.298229C9.93259 0.233924 10.0674 0.233924 10.1758 0.298229C10.3016 0.372896 10.3798 0.704434 10.5363 1.36751L11.2997 4.60302C11.5837 5.80636 11.7257 6.40803 12.0343 6.89596C12.3071 7.32744 12.6726 7.69285 13.104 7.96574C13.592 8.27432 14.1936 8.4163 15.397 8.70025L18.6325 9.46373C19.2956 9.6202 19.6271 9.69843 19.7018 9.82424C19.7661 9.93259 19.7661 10.0674 19.7018 10.1758C19.6271 10.3016 19.2956 10.3798 18.6325 10.5363L15.397 11.2997C14.1936 11.5837 13.592 11.7257 13.104 12.0343C12.6726 12.3071 12.3071 12.6726 12.0343 13.104C11.7257 13.592 11.5837 14.1936 11.2997 15.397L10.5363 18.6325C10.3798 19.2956 10.3016 19.6271 10.1758 19.7018C10.0674 19.7661 9.93259 19.7661 9.82424 19.7018C9.69843 19.6271 9.6202 19.2956 9.46373 18.6325L8.70025 15.397C8.4163 14.1936 8.27432 13.592 7.96574 13.104C7.69285 12.6726 7.32744 12.3071 6.89596 12.0343C6.40803 11.7257 5.80636 11.5837 4.60301 11.2997L1.36751 10.5363C0.704433 10.3798 0.372896 10.3016 0.298229 10.1758C0.233924 10.0674 0.233924 9.93259 0.298229 9.82424C0.372896 9.69843 0.704434 9.6202 1.36751 9.46373L4.60302 8.70025C5.80636 8.4163 6.40803 8.27432 6.89596 7.96574C7.32744 7.69285 7.69285 7.32744 7.96574 6.89596C8.27432 6.40803 8.4163 5.80636 8.70025 4.60301L9.46373 1.36751Z"
                        fill="black"
                      />
                    </svg>
                  </div>

                  <p className="text-2xl">Классическая йога</p>
                </div>
              </div>
              <div className="pl-[124px]">
                <div className="flex flex-row pt-[30px] pl-[30px]">
                  <div className="w-[26px] h-[26px] pr-[5px]">
                    <svg
                      className=""
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.46373 1.36751C9.6202 0.704433 9.69843 0.372896 9.82424 0.298229C9.93259 0.233924 10.0674 0.233924 10.1758 0.298229C10.3016 0.372896 10.3798 0.704434 10.5363 1.36751L11.2997 4.60302C11.5837 5.80636 11.7257 6.40803 12.0343 6.89596C12.3071 7.32744 12.6726 7.69285 13.104 7.96574C13.592 8.27432 14.1936 8.4163 15.397 8.70025L18.6325 9.46373C19.2956 9.6202 19.6271 9.69843 19.7018 9.82424C19.7661 9.93259 19.7661 10.0674 19.7018 10.1758C19.6271 10.3016 19.2956 10.3798 18.6325 10.5363L15.397 11.2997C14.1936 11.5837 13.592 11.7257 13.104 12.0343C12.6726 12.3071 12.3071 12.6726 12.0343 13.104C11.7257 13.592 11.5837 14.1936 11.2997 15.397L10.5363 18.6325C10.3798 19.2956 10.3016 19.6271 10.1758 19.7018C10.0674 19.7661 9.93259 19.7661 9.82424 19.7018C9.69843 19.6271 9.6202 19.2956 9.46373 18.6325L8.70025 15.397C8.4163 14.1936 8.27432 13.592 7.96574 13.104C7.69285 12.6726 7.32744 12.3071 6.89596 12.0343C6.40803 11.7257 5.80636 11.5837 4.60301 11.2997L1.36751 10.5363C0.704433 10.3798 0.372896 10.3016 0.298229 10.1758C0.233924 10.0674 0.233924 9.93259 0.298229 9.82424C0.372896 9.69843 0.704434 9.6202 1.36751 9.46373L4.60302 8.70025C5.80636 8.4163 6.40803 8.27432 6.89596 7.96574C7.32744 7.69285 7.69285 7.32744 7.96574 6.89596C8.27432 6.40803 8.4163 5.80636 8.70025 4.60301L9.46373 1.36751Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div className="">
                    <p className="text-2xl">Кундалини-йога</p>
                  </div>
                </div>
                <div className="flex flex-row pb-[30px] pl-[30px] pt-[34px]">
                  <div className="w-[26px] h-[26px] pr-[5px]">
                    <svg
                      className=""
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.46373 1.36751C9.6202 0.704433 9.69843 0.372896 9.82424 0.298229C9.93259 0.233924 10.0674 0.233924 10.1758 0.298229C10.3016 0.372896 10.3798 0.704434 10.5363 1.36751L11.2997 4.60302C11.5837 5.80636 11.7257 6.40803 12.0343 6.89596C12.3071 7.32744 12.6726 7.69285 13.104 7.96574C13.592 8.27432 14.1936 8.4163 15.397 8.70025L18.6325 9.46373C19.2956 9.6202 19.6271 9.69843 19.7018 9.82424C19.7661 9.93259 19.7661 10.0674 19.7018 10.1758C19.6271 10.3016 19.2956 10.3798 18.6325 10.5363L15.397 11.2997C14.1936 11.5837 13.592 11.7257 13.104 12.0343C12.6726 12.3071 12.3071 12.6726 12.0343 13.104C11.7257 13.592 11.5837 14.1936 11.2997 15.397L10.5363 18.6325C10.3798 19.2956 10.3016 19.6271 10.1758 19.7018C10.0674 19.7661 9.93259 19.7661 9.82424 19.7018C9.69843 19.6271 9.6202 19.2956 9.46373 18.6325L8.70025 15.397C8.4163 14.1936 8.27432 13.592 7.96574 13.104C7.69285 12.6726 7.32744 12.3071 6.89596 12.0343C6.40803 11.7257 5.80636 11.5837 4.60301 11.2997L1.36751 10.5363C0.704433 10.3798 0.372896 10.3016 0.298229 10.1758C0.233924 10.0674 0.233924 9.93259 0.298229 9.82424C0.372896 9.69843 0.704434 9.6202 1.36751 9.46373L4.60302 8.70025C5.80636 8.4163 6.40803 8.27432 6.89596 7.96574C7.32744 7.69285 7.69285 7.32744 7.96574 6.89596C8.27432 6.40803 8.4163 5.80636 8.70025 4.60301L9.46373 1.36751Z"
                        fill="black"
                      />
                    </svg>
                  </div>

                  <p className="text-2xl">Йогатерапия</p>
                </div>
              </div>
              <div className="pl-[124px]">
                <div className="flex flex-row pt-[30px] pl-[30px]">
                  <div className="w-[26px] h-[26px] pr-[5px]">
                    <svg
                      className=""
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.46373 1.36751C9.6202 0.704433 9.69843 0.372896 9.82424 0.298229C9.93259 0.233924 10.0674 0.233924 10.1758 0.298229C10.3016 0.372896 10.3798 0.704434 10.5363 1.36751L11.2997 4.60302C11.5837 5.80636 11.7257 6.40803 12.0343 6.89596C12.3071 7.32744 12.6726 7.69285 13.104 7.96574C13.592 8.27432 14.1936 8.4163 15.397 8.70025L18.6325 9.46373C19.2956 9.6202 19.6271 9.69843 19.7018 9.82424C19.7661 9.93259 19.7661 10.0674 19.7018 10.1758C19.6271 10.3016 19.2956 10.3798 18.6325 10.5363L15.397 11.2997C14.1936 11.5837 13.592 11.7257 13.104 12.0343C12.6726 12.3071 12.3071 12.6726 12.0343 13.104C11.7257 13.592 11.5837 14.1936 11.2997 15.397L10.5363 18.6325C10.3798 19.2956 10.3016 19.6271 10.1758 19.7018C10.0674 19.7661 9.93259 19.7661 9.82424 19.7018C9.69843 19.6271 9.6202 19.2956 9.46373 18.6325L8.70025 15.397C8.4163 14.1936 8.27432 13.592 7.96574 13.104C7.69285 12.6726 7.32744 12.3071 6.89596 12.0343C6.40803 11.7257 5.80636 11.5837 4.60301 11.2997L1.36751 10.5363C0.704433 10.3798 0.372896 10.3016 0.298229 10.1758C0.233924 10.0674 0.233924 9.93259 0.298229 9.82424C0.372896 9.69843 0.704434 9.6202 1.36751 9.46373L4.60302 8.70025C5.80636 8.4163 6.40803 8.27432 6.89596 7.96574C7.32744 7.69285 7.69285 7.32744 7.96574 6.89596C8.27432 6.40803 8.4163 5.80636 8.70025 4.60301L9.46373 1.36751Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div className="">
                    <p className="text-2xl">Хатха-йога</p>
                  </div>
                </div>
                <div className="flex flex-row pb-[30px] pl-[30px] pt-[34px]">
                  <div className="w-[26px] h-[26px] pr-[5px]">
                    <svg
                      className=""
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.46373 1.36751C9.6202 0.704433 9.69843 0.372896 9.82424 0.298229C9.93259 0.233924 10.0674 0.233924 10.1758 0.298229C10.3016 0.372896 10.3798 0.704434 10.5363 1.36751L11.2997 4.60302C11.5837 5.80636 11.7257 6.40803 12.0343 6.89596C12.3071 7.32744 12.6726 7.69285 13.104 7.96574C13.592 8.27432 14.1936 8.4163 15.397 8.70025L18.6325 9.46373C19.2956 9.6202 19.6271 9.69843 19.7018 9.82424C19.7661 9.93259 19.7661 10.0674 19.7018 10.1758C19.6271 10.3016 19.2956 10.3798 18.6325 10.5363L15.397 11.2997C14.1936 11.5837 13.592 11.7257 13.104 12.0343C12.6726 12.3071 12.3071 12.6726 12.0343 13.104C11.7257 13.592 11.5837 14.1936 11.2997 15.397L10.5363 18.6325C10.3798 19.2956 10.3016 19.6271 10.1758 19.7018C10.0674 19.7661 9.93259 19.7661 9.82424 19.7018C9.69843 19.6271 9.6202 19.2956 9.46373 18.6325L8.70025 15.397C8.4163 14.1936 8.27432 13.592 7.96574 13.104C7.69285 12.6726 7.32744 12.3071 6.89596 12.0343C6.40803 11.7257 5.80636 11.5837 4.60301 11.2997L1.36751 10.5363C0.704433 10.3798 0.372896 10.3016 0.298229 10.1758C0.233924 10.0674 0.233924 9.93259 0.298229 9.82424C0.372896 9.69843 0.704434 9.6202 1.36751 9.46373L4.60302 8.70025C5.80636 8.4163 6.40803 8.27432 6.89596 7.96574C7.32744 7.69285 7.69285 7.32744 7.96574 6.89596C8.27432 6.40803 8.4163 5.80636 8.70025 4.60301L9.46373 1.36751Z"
                        fill="black"
                      />
                    </svg>
                  </div>

                  <p className="text-2xl">Аштанга-йога</p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
          <div className="overflow-hidden">
            <div className="bg-[#FFFFFF] rounded-[20px] w-[1160px] h-[486px] shadow-2xl mt-[102px] flex flex-row ">
              <div>
                <div className="w-[437px] h-[406px] p-[28px]">
                  <h1 className="w-[398px] h-[120px] text-5xl font-semibold ">
                    Начните путь <br />к новому телу
                  </h1>
                  <div className="">
                    <ul className="w-[437px] h-[178px] text-2xl/loose pl-[28px] list-disc pb-[28px]">
                      <li>проработка всех групп мышц</li>
                      <li>тренировка суставов</li>
                      <li>улучшение циркуляции крови</li>
                      <li>упражнения заряжают бодростью</li>
                      <li>помогают противостоять стрессам</li>
                    </ul>
                  </div>
                </div>
                <div className="pl-[28px] cursor-pointer">
                  <div className="btn-green w-[437px] h-[52px] text-2xl py-2 px-4 font-semibold text-center">
                    Войдите, чтобы добавить курс
                  </div>
                </div>
              </div>
              <div>
                
                <img
                  className="rotate-[355deg] pt-[100px] relative "
                  src="/green_line.png"
                  width="670.18px"
                  height="390.98px"
                />
                
                <img
                  className="rotate-[357deg] top-[-655px] z-[1] left-[+150px] relative"
                  src="/running_man.png"
                  width="519.47px"
                  height="539.54px"
                />
                <img
                  className="top-[-1110px] z-[2] left-[+250px] relative"
                  src="/black_line.png"
                  width="50px"
                  height="42.5px"
                />
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
