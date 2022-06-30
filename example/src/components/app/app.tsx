import React from 'react';

import cntl from '../../typescript-lib';

const appCN = cntl`
  flex
  justify-center
  my-2
  sm:my-24
  md:my-48
  bg-gradient-to-r
  from-green-400
  to-blue-500
`;

const cardCN = cntl`
  w-full
  max-w-md
`;

const formCN = cntl`
  bg-white
  shadow-md
  rounded
  px-8
  py-8
  pt-8
`;

const fieldCN = cntl`
  px-4
  pb-4
`;

const labelCN = cntl`
  text-sm
  block
  font-bold
  pb-2
`;

const inputCN = ({ isErrored }: { isErrored: boolean }) => cntl`
  shadow
  appearance-none
  border
  rounded
  w-full
  py-2
  px-3
  text-gray-700
  leading-tight
  focus:outline-none
  focus:shadow-outline

  ${
    !isErrored
      ? cntl`
    border-blue-300
  `
      : cntl`
    border-red-800
  `
  }
`;

const buttonWrapperCN = cntl`
  px-4
`;

const buttonCN = cntl`
  bg-blue-500
  hover:bg-blue-700
  text-white
  font-bold
  py-2
  px-4
  rounded
  focus:outline-none
  focus:shadow-outline
`;

export const App = () => {
  const [errors, setErrors] = React.useState<string[]>([]);
  const emailRef = React.createRef<HTMLInputElement>();
  const passwordRef = React.createRef<HTMLInputElement>();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = () => {
    setErrors([]);
  };

  const handleSubmit: React.FormEventHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const email = emailRef.current ? emailRef.current.value : '';
    const password = passwordRef.current ? passwordRef.current.value : '';

    const newErrors = [];
    if (!email) newErrors.push('email');
    if (!password) newErrors.push('password');
    setErrors(newErrors);
  };

  const isErrored = (field: string) => errors.includes(field);

  return (
    <div className={appCN}>
      <div className={cardCN}>
        <form onSubmit={handleSubmit} className={formCN}>
          <div className={fieldCN}>
            <label htmlFor="email" className={labelCN}>
              EMAIL ADDRESS
            </label>
            <input
              ref={emailRef}
              type="email"
              name="email"
              id="email"
              placeholder="email"
              onChange={handleChange}
              className={inputCN({ isErrored: isErrored('email') })}
            />
          </div>
          <div className={fieldCN}>
            <label htmlFor="password" className={labelCN}>
              PASSWORD
            </label>
            <input
              type="password"
              name="email"
              id="password"
              placeholder="password"
              onChange={handleChange}
              className={inputCN({ isErrored: isErrored('password') })}
            />
          </div>
          <div className={buttonWrapperCN}>
            <button className={buttonCN} type="submit">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
