
export const HeadTitle = ({ title, subTitle}) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div>
        <h1 className="font-semibold  text-center md:text-5xl text-3xl">
          {title}
        </h1>
      </div>
      <div className="bg-black-200 py-2 px-4 rounded-full w-fit text-sm md:text-base text-nowrap">
        <p>{subTitle}</p>
      </div>
    </div>
  )
}
