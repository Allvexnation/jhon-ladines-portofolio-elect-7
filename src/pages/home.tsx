'use client';

import {
  PiCodeBold,
  PiCardsThreeBold,
  PiBriefcaseBold,
  PiChatTeardropDotsBold,
} from 'react-icons/pi';
import { HiOutlineWrenchScrewdriver } from 'react-icons/hi2';
import { LuYoutube } from 'react-icons/lu';
import { BiUser, BiCategory } from 'react-icons/bi';
import GlassIcons from '@/components/GlassIcons';
import { TechLogoIcon } from '@/components/TechLogoIcon';
import { SkillsCardTechs } from '@/components/SkillsCardTechs';
import { useHomeLogic } from '@/functions/useHomeLogic';

export default function Home() {
  const { router, isDarkMode, sectionRef, isMounted, pageAnimated, t, themeColors } =
    useHomeLogic();
  const glassIconItems = TechLogoIcon({ isDarkMode });

  if (!isMounted) {
    return null;
  }

  return (
    <section
      ref={sectionRef}
      className={`relative min-h-screen py-6 sm:py-8 px-4 sm:px-5 lg:px-6 transition-all duration-700 ease-out ${pageAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={
        {
          '--card-stroke-width': '1.5px',
          '--card-stroke-color': 'rgba(120, 120, 120, 0.3)',
        } as React.CSSProperties
      }
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Hero Section */}
        <div className="mb-12 animate-fadeInUp animate-stagger-1">
          <h1
            className={`text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'} mb-4 break-words`}
          >
            {t.greeting}
          </h1>

          <div
            className={`flex flex-wrap items-center gap-3 mb-4 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-800'}`}
          >
            <div className="flex items-center gap-1.5">
              <div
                className={`w-1.5 h-1.5 ${isDarkMode ? 'bg-gray-400' : 'bg-black'} rounded-full`}
              />
              <span className="text-sm">{t.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div
                className={`w-1.5 h-1.5 ${isDarkMode ? 'bg-gray-400' : 'bg-black'} rounded-full`}
              />
              <span className="text-sm">{t.status}</span>
            </div>
          </div>

          <p
            className={`text-sm sm:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-900'} leading-relaxed max-w-4xl mb-6`}
          >
            {t.description}
          </p>
        </div>

        {/* Divider after Hero Section */}
        <div className="mb-12 animate-fadeInUp animate-stagger-2">
          <div className={`h-px ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
        </div>

        {/* Skills Section */}
        <div className="mb-12 animate-fadeInUp animate-stagger-3">
          <div className="flex flex-col gap-1.5 mb-5">
            <div className="flex items-center gap-3">
              <PiCodeBold
                className={`w-5 h-5 sm:w-6 sm:h-6 ${isDarkMode ? 'text-gray-400' : 'text-black'}`}
              />
              <h2
                className={`text-base sm:text-lg font-bold leading-none ${isDarkMode ? 'text-white' : 'text-black'}`}
              >
                {t.skillsTitle}
              </h2>
            </div>
            <p
              className={`text-sm sm:text-base font-medium opacity-70 ${isDarkMode ? 'text-gray-400' : 'text-gray-800'}`}
            >
              {t.skillsDescription}
            </p>
          </div>

          <GlassIcons
            compact={true}
            isDarkMode={isDarkMode}
            items={glassIconItems}
            className={isDarkMode ? 'text-white' : 'text-gray-900'}
          />
        </div>

        {/* Divider after Skills Section */}
        <div className="mb-12 animate-fadeInUp animate-stagger-4">
          <div className={`h-px ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
        </div>

        {/* Featured Sections */}
        <div className="mb-12 animate-fadeInUp animate-stagger-5">
          <div className="flex flex-col gap-1.5 mb-5">
            <div className="flex items-center gap-3">
              <PiCardsThreeBold
                className={`w-5 h-5 sm:w-6 sm:h-6 ${isDarkMode ? 'text-gray-400' : 'text-black'}`}
              />
              <h2
                className={`text-base sm:text-lg font-bold leading-none ${isDarkMode ? 'text-white' : 'text-black'}`}
              >
                {t.featuredTitle}
              </h2>
            </div>
            <p
              className={`text-sm sm:text-base font-medium opacity-70 ${isDarkMode ? 'text-gray-400' : 'text-gray-800'}`}
            >
              {t.featuredDescription}
            </p>
          </div>

          {/* First Row - Projects, About, Skills */}
          <div className="grid grid-cols-1 md:grid-cols-10 gap-3 mb-3 animate-fadeInUp animate-stagger-6">
            {/* Projects Showcase Card */}
            <div
              className="featured-card md:col-span-4 rounded-2xl p-1.5 transition-all relative min-h-[280px] cursor-pointer select-none"
              style={{ borderWidth: '3px', borderStyle: 'solid', borderColor: themeColors.border }}
              onClick={() => router.push('/projects')}
            >
              <div
                className="relative overflow-hidden rounded-xl h-full w-full z-10 p-5 md:p-0 flex flex-col"
                style={{ backgroundColor: themeColors.card }}
              >
                <div className="flex flex-col items-center gap-1.5 mb-2.5">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
                  >
                    <BiCategory
                      className={`w-4.5 h-4.5 ${isDarkMode ? 'text-gray-400' : 'text-black'}`}
                    />
                  </div>
                  <h3
                    className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold text-xs text-center`}
                  >
                    {t.projectsTitle}
                  </h3>
                </div>
                <p
                  className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-800'} mb-2.5 text-center`}
                >
                  {t.projectsDescription}
                </p>
                <div className="flex items-center justify-center h-40 mt-2">
                  <div className={`text-4xl ${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`}>
                    📁
                  </div>
                </div>
              </div>
            </div>

            {/* About Me and Skills & Tools Container */}
            <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* About Me Card */}
              <div
                className="featured-card rounded-2xl p-1.5 transition-all flex flex-col relative select-none cursor-pointer"
                style={{
                  borderWidth: '3px',
                  borderStyle: 'solid',
                  borderColor: themeColors.border,
                }}
                onClick={() => router.push('/about')}
              >
                <div
                  className="relative overflow-hidden rounded-xl h-full w-full z-10 p-5 flex flex-col"
                  style={{ backgroundColor: themeColors.card }}
                >
                  <div className="flex flex-col items-center gap-1.5 mb-2.5">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
                    >
                      <BiUser
                        className={`w-4.5 h-4.5 ${isDarkMode ? 'text-gray-400' : 'text-black'}`}
                      />
                    </div>
                    <h3
                      className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold text-xs text-center`}
                    >
                      About Me
                    </h3>
                  </div>
                  <p
                    className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-800'} mb-2.5 text-center`}
                  >
                    Who I am and what I do.
                  </p>
                  <div className="flex items-center justify-center px-2 py-4">
                    <div className={`text-4xl ${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`}>
                      👤
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills & Tools Card */}
              <div
                className="featured-card rounded-2xl p-1.5 transition-all relative select-none cursor-pointer"
                style={{
                  overflow: 'visible',
                  borderWidth: '3px',
                  borderStyle: 'solid',
                  borderColor: themeColors.border,
                }}
                onClick={() => router.push('/techstacks')}
              >
                <div
                  className="relative rounded-xl h-full w-full z-10 p-5 flex flex-col"
                  style={{ backgroundColor: themeColors.card, overflow: 'visible' }}
                >
                  <div className="flex flex-col items-center gap-1.5 mb-2.5">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
                    >
                      <HiOutlineWrenchScrewdriver
                        className={`w-4.5 h-4.5 ${isDarkMode ? 'text-gray-400' : 'text-black'}`}
                      />
                    </div>
                    <h3
                      className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold text-xs text-center`}
                    >
                      Skills & Tools
                    </h3>
                  </div>
                  <p
                    className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-800'} mb-2.5 text-center`}
                  >
                    Covering software, web, design, and UI/UX technologies.
                  </p>
                  <div className="relative h-[200px] flex items-center justify-center overflow-visible">
                    <div className="grid grid-cols-4 gap-2">
                      <SkillsCardTechs isDarkMode={isDarkMode} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row - Tutorials, Chat Room, Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 animate-fadeInUp animate-stagger-7">
            {/* Tutorials Card */}
            <div
              className="featured-card rounded-2xl p-1.5 transition-all relative cursor-pointer select-none"
              style={{ borderWidth: '3px', borderStyle: 'solid', borderColor: themeColors.border }}
              onClick={() => router.push('/tutorials')}
            >
              <div
                className="relative overflow-hidden rounded-xl h-full w-full z-10 p-5 flex flex-col"
                style={{ backgroundColor: themeColors.card }}
              >
                <div className="flex flex-col items-center gap-1.5 mb-2.5">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
                  >
                    <LuYoutube
                      className={`w-4.5 h-4.5 ${isDarkMode ? 'text-gray-400' : 'text-black'}`}
                    />
                  </div>
                  <h3
                    className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold text-xs text-center`}
                  >
                    {t.tutorialsTitle}
                  </h3>
                </div>
                <p
                  className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-800'} mb-2.5 text-center`}
                >
                  {t.tutorialsDescription}
                </p>
                <div className="flex justify-center items-center h-40 mt-2">
                  <div className={`text-4xl ${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`}>
                    📚
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Rooms Card */}
            <div
              className="featured-card rounded-2xl p-1.5 transition-all relative select-none cursor-pointer"
              style={{ borderWidth: '3px', borderStyle: 'solid', borderColor: themeColors.border }}
              onClick={() => router.push('/chatroom')}
            >
              <div
                className="relative overflow-hidden rounded-xl h-full w-full z-10 p-5 flex flex-col"
                style={{ backgroundColor: themeColors.card }}
              >
                <div className="flex flex-col items-center gap-1.5 mb-2.5">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
                  >
                    <PiChatTeardropDotsBold
                      className={`w-4.5 h-4.5 ${isDarkMode ? 'text-gray-400' : 'text-black'}`}
                    />
                  </div>
                  <h3
                    className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold text-xs text-center`}
                  >
                    {t.chatRoomTitle}
                  </h3>
                </div>
                <p
                  className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-800'} mb-2.5 text-center`}
                >
                  {t.chatRoomDescription}
                </p>
                <div className="space-y-2 mt-2.5">
                  <div
                    className="rounded-lg p-[3px] mb-2.5 relative"
                    style={{
                      borderWidth: '3px',
                      borderStyle: 'solid',
                      borderColor: themeColors.border,
                    }}
                  >
                    <div
                      className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white'} p-2 rounded-md flex items-center justify-center min-h-[40px] overflow-hidden w-full`}
                    >
                      <p
                        className={`text-[13px] ${isDarkMode ? 'text-gray-400' : 'text-gray-700'} italic`}
                      >
                        {t.noMessages}
                      </p>
                    </div>
                  </div>
                  <a
                    href="/chatroom"
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-2 rounded-lg transition-colors font-medium text-center"
                  >
                    {t.chatRoomButton}
                  </a>
                </div>
              </div>
            </div>

            {/* Services Card */}
            <div
              className="featured-card rounded-2xl p-1.5 transition-all relative cursor-pointer select-none"
              style={{ borderWidth: '3px', borderStyle: 'solid', borderColor: themeColors.border }}
              onClick={() => router.push('/services')}
            >
              <div
                className="relative overflow-hidden rounded-xl h-full w-full z-10 p-5 flex flex-col"
                style={{ backgroundColor: themeColors.card }}
              >
                <div className="flex flex-col items-start gap-1.5 mb-2.5">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
                  >
                    <PiBriefcaseBold
                      className={`w-4.5 h-4.5 ${isDarkMode ? 'text-gray-400' : 'text-black'}`}
                    />
                  </div>
                  <h3
                    className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold text-xs text-left`}
                  >
                    {t.servicesTitle}
                  </h3>
                </div>
                <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-800'} mb-1.5`}>
                  Building complete web, <br /> software, and design solutions.
                </p>
                <div className="flex justify-center items-center h-32 mt-2">
                  <div className={`text-4xl ${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`}>
                    💼
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
