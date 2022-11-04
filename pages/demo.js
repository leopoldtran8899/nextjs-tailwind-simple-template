import Head from 'next/head';
import {  useAppContext, appActions } from '../context/app-context';
import { AiFillLike } from 'react-icons/ai'
export default function Demo() {
  const [state, dispatch] = useAppContext();
  const { likes } = state;
  const like = () => {
    console.log('like ' + likes);
    dispatch({ type: appActions.ADD_LIKES_ACTION });
  };
  const unlike = () => dispatch({ type: appActions.REMOVE_LIKES_ACTION });
  return (
    <div>
      <Head>
        <title>Demo using Context</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='width-full flex flex-col items-center p-10'>
        <div className={'w-24 ' + (likes > 0 ? 'text-green-500' : 'text-white')}><AiFillLike size={'100%'}/></div>
        <div className='mb-4'>Likes: {likes}</div>
        <div className='flex flex-row justify-center gap-x-3 w-full'>
          <button
            className='w-1/4 h-8 text-black hover:bg-slate-100 shadow-slate-500 shadow-md bg-slate-300 '
            onClick={like}
          >
            Like
          </button>
          <button
            className='w-1/4 h-8 text-black hover:bg-slate-100 shadow-slate-500 shadow-md bg-slate-300 '
            onClick={unlike}
          >
            UnLike
          </button>
        </div>
      </main>
    </div>
  );
}
