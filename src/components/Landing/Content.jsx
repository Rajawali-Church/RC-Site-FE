import React from 'react'
import pastor from '../../assets/pastor.png';
import copastor from '../../assets/copastor.png';
import background from '../../assets/background.jpg';

function Content() {
    return (
        <div className='flex flex-col items-center mt-4'>
            {/* Pastor */}
            <p className="text-black text-4xl font-bold w-9/12 mb-2">Pastors</p>
            <div className="flex flex-col items-center w-3/4 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover rounded-t-lg md:h-36 md:w-48 md:rounded-none md:rounded-l-lg" src={pastor} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ps. Andreas Ferryanto</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>
                </div>
            </div>
            <div className="my-2"></div>
            <div className="flex flex-col place-content-end items-center w-3/4 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className="flex flex-col justify-between p-4 leading-normal text-end">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ps. Joe Y. D. (Co. Pastor)</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>
                </div>
                <img className="object-cover rounded-t-lg md:h-36 md:w-48 md:rounded-none md:rounded-l-lg" src={copastor} alt="" />
            </div>

            <div className='my-10'></div>

            {/* Vision Mission */}
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 w-9/12 gap-5'>
                <div className='bg-primary-soft col-span-1 p-3 rounded-lg flex flex-col items-center'>
                    <p className='font-bold text-4xl text-center'>Vision</p>
                    <hr className='mt-1 border-gray-200 border w-full'></hr>
                    <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar neque laoreet suspendisse interdum consectetur libero id.</p>
                </div>
                <div className='bg-secondary-soft col-span-1 p-3 rounded-lg flex flex-col items-center'>
                    <p className='font-bold text-4xl text-center'>Mission</p>
                    <hr className='mt-1 border-gray-200 border w-full'></hr>
                    <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar neque laoreet suspendisse interdum consectetur libero id.</p>
                </div>
            </div>


            <div className='my-10'></div>

            {/* Contact Us */}
            <div className="block w-9/12 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
                    <div className='p-6'>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Contact Us</h5>
                        <div className='flex flex-col items-start'>
                            <div className='flex items-center gap-3'>
                                <svg className='h-12 w-12' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100px" height="100px"><polygon fill="#f16e7c" points="29.434,25.293 50,40.657 70.566,25.293 70.566,48 50,63 29.434,48"/><path fill="#ead032" d="M70.566,47.554L87.91,34.849v-4.808c0-5.002-4.055-9.056-9.056-9.056h-2.046l-6.242,4.308	C70.566,25.293,70.566,47.554,70.566,47.554z"/><path fill="#e85654" d="M29.434,47.554L12.089,34.849v-4.808c0-5.002,4.055-9.056,9.056-9.056h2.046l6.242,4.308	L29.434,47.554L29.434,47.554z"/><path fill="#8cc78c" d="M70,48l18.362-13.638v38.926c0,3.155-2.557,5.712-5.712,5.712H70V48z"/><path fill="#40a6dd" d="M30,48L11.638,34.362v38.926c0,3.155,2.557,5.712,5.712,5.712H30V48z"/><path fill="#1f212b" d="M78.99,20c-2.186,0-4.265,0.695-6.012,2.011L50,39.328L27.021,22.011C25.274,20.695,23.195,20,21,20	c-5.514,0-10,4.486-10,10v44c0,3.309,2.691,6,6,6h13c0.553,0,1-0.447,1-1V50.092L49.4,63.8c0.18,0.13,0.39,0.2,0.6,0.2	s0.41-0.06,0.59-0.19L69,50.514V79c0,0.553,0.447,1,1,1h13c3.309,0,6-2.691,6-6V30C89,24.486,84.514,20,78.99,20z M74.182,23.608	C75.579,22.557,77.242,22,79,22c4.411,0,8,3.589,8,8v4.799L71,46.724V46.6V26.006L74.182,23.608z M21.01,22	c1.748,0,3.411,0.557,4.809,1.608L29,26.006V46.6v0.124L13,34.799V30C13,25.589,16.589,22,21.01,22z M29,78H17c-2.206,0-4-1.794-4-4	V36.047l16,11.924v0.823V49V78z M50.01,61.76L30,47.322V26.76l19.398,14.619c0.017,0.013,0.037,0.015,0.054,0.026	c0.059,0.039,0.122,0.064,0.187,0.089c0.057,0.022,0.111,0.047,0.17,0.059c0.066,0.013,0.13,0.011,0.197,0.01	c0.061,0,0.12,0.002,0.18-0.009c0.062-0.012,0.12-0.038,0.18-0.062c0.063-0.025,0.124-0.049,0.181-0.087	c0.017-0.011,0.037-0.013,0.054-0.026L70,26.76v20.562L50.01,61.76z M83,78H71V49.07v-0.174V48.5v-0.528l16-11.924V74	C87,76.206,85.206,78,83,78z"/><path fill="#1f212b" d="M16.5,61c0.276,0,0.5-0.224,0.5-0.5v-2c0-0.276-0.224-0.5-0.5-0.5S16,58.224,16,58.5v2	C16,60.776,16.224,61,16.5,61z"/><path fill="#1f212b" d="M16.5,52c0.276,0,0.5-0.224,0.5-0.5v-7c0-0.276-0.224-0.5-0.5-0.5S16,44.224,16,44.5v7	C16,51.776,16.224,52,16.5,52z"/><path fill="#1f212b" d="M24.5,74h-7c-0.275,0-0.5-0.225-0.5-0.5v-10c0-0.276-0.224-0.5-0.5-0.5S16,63.224,16,63.5v10	c0,0.827,0.673,1.5,1.5,1.5h7c0.276,0,0.5-0.224,0.5-0.5S24.776,74,24.5,74z"/><path fill="#1f212b" d="M42.801,40.16c-0.22-0.164-0.532-0.123-0.7,0.099c-0.166,0.221-0.122,0.534,0.099,0.7l2.047,1.542	c0.09,0.067,0.195,0.101,0.301,0.101c0.151,0,0.301-0.068,0.399-0.199c0.166-0.221,0.122-0.534-0.099-0.7L42.801,40.16z"/><path fill="#1f212b" d="M46.444,42.905c-0.219-0.164-0.533-0.123-0.7,0.099c-0.166,0.221-0.122,0.534,0.099,0.7l2.914,2.195	C48.847,45.967,48.952,46,49.058,46c0.151,0,0.301-0.068,0.399-0.199c0.166-0.221,0.122-0.534-0.099-0.7L46.444,42.905z"/><path fill="#1f212b" d="M55.306,41.587l-3.337,2.514c-0.221,0.166-0.265,0.479-0.099,0.7C51.969,44.932,52.118,45,52.27,45	c0.105,0,0.211-0.033,0.301-0.101l3.337-2.514c0.221-0.166,0.265-0.479,0.099-0.7C55.839,41.464,55.524,41.423,55.306,41.587z"/><path fill="#1f212b" d="M58.682,39.044l-1.778,1.339c-0.221,0.166-0.265,0.479-0.099,0.7	c0.099,0.131,0.248,0.199,0.399,0.199c0.105,0,0.211-0.033,0.301-0.101l1.778-1.339c0.221-0.166,0.265-0.479,0.099-0.7	C59.215,38.92,58.9,38.88,58.682,39.044z"/><path fill="#1f212b" d="M66.899,33.479c-0.167-0.222-0.481-0.263-0.7-0.099l-5.919,4.46c-0.221,0.166-0.265,0.479-0.099,0.7	c0.099,0.131,0.248,0.199,0.399,0.199c0.105,0,0.211-0.033,0.301-0.101l5.919-4.459C67.021,34.014,67.065,33.7,66.899,33.479z"/><path fill="#1f212b" d="M16.5,56c0.276,0,0.5-0.224,0.5-0.5v-1c0-0.276-0.224-0.5-0.5-0.5S16,54.224,16,54.5v1	C16,55.776,16.224,56,16.5,56z"/></svg>
                                <a href='https://mail.google.com/mail/u/0/?fs=1&to=example@mail.com&tf=cm' target='_blank' className="font-medium hover:underline cursor-pointer text-gray-700 hover:text-blue-600 dark:text-gray-400">Example@mail.com</a>
                            </div>
                            <div className='flex items-center gap-3'>
                                <svg className='h-12 w-12' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64px" height="64px"><path fill="#97e0bb" d="M3,32A29,29,0,1,1,16,56.2C13,57,6,59,6,59A94.15,94.15,0,0,0,8.36,48.81,28.87,28.87,0,0,1,3,32Z"/><path fill="#72caaf" d="M32 9A23 23 0 1 0 32 55A23 23 0 1 0 32 9Z"/><path fill="#faefde" d="M24,18l3,8-2.68,4.21L32,37l4,3.09L40,36l8,3-2.16,6.33-6.4,1.74L27.81,42.42s-8.64-6.44-11-14c-1.31-4.08,1.74-8.72,1.74-8.72Z"/><path fill="#8d6c9f" d="M46.95,37.52l-.42-.21s-4.41-2.2-5.25-2.49a2.43,2.43,0,0,0-3,.92l-.33.46a24.53,24.53,0,0,1-1.61,2.12.67.67,0,0,1-.71,0l-.24-.1a17.84,17.84,0,0,1-5.54-3.46,22.06,22.06,0,0,1-4-5c0-.07-.06-.12-.06-.12a2.31,2.31,0,0,1,.28-.36c.2-.25.39-.45.59-.66s.34-.36.51-.56l.08-.09a5,5,0,0,0,.89-1.29A2.53,2.53,0,0,0,28,24.47c-.12-.25-1-2.46-1.63-3.92l-.67-1.62h0c-.64-1.54-1.35-1.84-2.5-1.89-.28,0-.58,0-.93,0a4.71,4.71,0,0,0-3.42,1.29A9.2,9.2,0,0,0,16,25.22c0,3.41,2,6.69,3.27,8.4l.13.19c3.77,5.46,8.44,9.55,13.15,11.5C36.74,47,39,47.5,40.52,47.5a7.86,7.86,0,0,0,1.7-.19c2.25-.49,5.05-2.15,5.81-4.29.63-1.78.79-3.68.37-4.42A2.92,2.92,0,0,0,46.95,37.52Zm-.81,4.83c-.47,1.34-2.63,2.63-4.34,3-1,.22-2.58.55-8.46-1.89C29,41.66,24.62,37.82,21.07,32.67l-.21-.3C19.79,30.92,18,28.06,18,25.22a7.31,7.31,0,0,1,2.36-5.59A2.79,2.79,0,0,1,22.3,19c.3,0,.56,0,.83,0a2.42,2.42,0,0,1,.41,0,1.67,1.67,0,0,1,.35.62l.67,1.62c.9,2.18,1.54,3.74,1.68,4s.16.42.1.54a3.21,3.21,0,0,1-.61.86l-.08.09c-.15.18-.3.33-.45.49s-.46.49-.69.78a2.19,2.19,0,0,0-.39,2.75,23.71,23.71,0,0,0,4.39,5.45,20,20,0,0,0,6.12,3.82l.22.09a2.61,2.61,0,0,0,2.94-.53,25.38,25.38,0,0,0,1.78-2.32l.33-.46c.21-.29.35-.33.71-.2.56.2,3.78,1.77,5,2.4l.45.22.54.25A7.32,7.32,0,0,1,46.14,42.35Z"/><path fill="#8d6c9f" d="M32.06,2H32A30,30,0,0,0,2,32,29.66,29.66,0,0,0,7.41,49.16L4,59.45a1,1,0,0,0,1.25,1.27l10.7-3.42A30,30,0,1,0,32.06,2ZM32,60a27.82,27.82,0,0,1-15.4-4.62,1,1,0,0,0-.55-.17,1,1,0,0,0-.3,0l-9.27,3,3-8.9a1,1,0,0,0-.14-.91A27.69,27.69,0,0,1,4,32,28,28,0,0,1,32,4h0a28,28,0,0,1,0,56Z"/><path fill="#8d6c9f" d="M47.37 13.2a1 1 0 0 0-1.25 1.56 21.46 21.46 0 0 1 1.77 1.59 1 1 0 0 0 1.42-1.41A23.7 23.7 0 0 0 47.37 13.2zM26.93 10.65a21.72 21.72 0 0 1 12.38.4 22 22 0 0 1 3 1.26 1 1 0 0 0 .45.11 1 1 0 0 0 .45-1.89 24 24 0 0 0-3.29-1.37 23.67 23.67 0 0 0-13.52-.44 1 1 0 1 0 .51 1.93zM14.57 41.82a1 1 0 0 0-1.34-.45l-1.85.93a1 1 0 0 0 .9 1.79l1.85-.93A1 1 0 0 0 14.57 41.82zM16 45.88l-1.55 1.38a1 1 0 1 0 1.33 1.49l1.55-1.38A1 1 0 1 0 16 45.88zM11.51 33h.06a1 1 0 0 0 .06-2l-2.07-.12a1 1 0 0 0-.12 2zM21.17 49.25a1 1 0 0 0-1.39.29l-1.14 1.73a1 1 0 1 0 1.67 1.1l1.14-1.73A1 1 0 0 0 21.17 49.25zM12.93 37.08a1 1 0 0 0-1.18-.78l-2 .42a1 1 0 0 0 .2 2l.2 0 2-.42A1 1 0 0 0 12.93 37.08z"/></svg>
                                <a href='https://wa.me/12345678910' target='_blank' className="font-medium hover:underline cursor-pointer text-gray-700 hover:text-blue-600 dark:text-gray-400">12345678910</a>
                            </div>
                            <div className='flex items-center gap-3'>
                                <svg className='h-12 w-12' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#0f0" d="M13,42h22c3.866,0,7-3.134,7-7V13c0-3.866-3.134-7-7-7H13c-3.866,0-7,3.134-7,7v22	C6,38.866,9.134,42,13,42z"/><path fill="#fff" d="M35.45,31.041l-4.612-3.051c-0.563-0.341-1.267-0.347-1.836-0.017c0,0,0,0-1.978,1.153	c-0.265,0.154-0.52,0.183-0.726,0.145c-0.262-0.048-0.442-0.191-0.454-0.201c-1.087-0.797-2.357-1.852-3.711-3.205	c-1.353-1.353-2.408-2.623-3.205-3.711c-0.009-0.013-0.153-0.193-0.201-0.454c-0.037-0.206-0.009-0.46,0.145-0.726	c1.153-1.978,1.153-1.978,1.153-1.978c0.331-0.569,0.324-1.274-0.017-1.836l-3.051-4.612c-0.378-0.571-1.151-0.722-1.714-0.332	c0,0-1.445,0.989-1.922,1.325c-0.764,0.538-1.01,1.356-1.011,2.496c-0.002,1.604,1.38,6.629,7.201,12.45l0,0l0,0l0,0l0,0	c5.822,5.822,10.846,7.203,12.45,7.201c1.14-0.001,1.958-0.248,2.496-1.011c0.336-0.477,1.325-1.922,1.325-1.922	C36.172,32.192,36.022,31.419,35.45,31.041z"/></svg>
                                <a target='_blank' className="font-medium text-gray-700">021 123 456</a>
                            </div>
                        </div>
                    </div>
                    <div className='hidden lg:block'>
                        <img className='rounded-r-lg' src={background} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;