import HeaderButton from './HeaderButton';

export default function Header ({ special }: { special?: boolean }) {
    return special ? (
        <div className='w-full h-20 bg-primary text-white text-xl flex'>
            <HeaderButton name="Home" path="" />
            <HeaderButton name="Not home" path="/nothome" />
        </div>
    ) : (
        <div className='w-full h-20 bg-primary text-white text-xl flex'>
            <HeaderButton name="< Back" path="" />
            
        </div>
    );
}
