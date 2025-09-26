// MUI 
import AssignmentIcon from "@mui/icons-material/Assignment";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AnalyticsIcon from "@mui/icons-material/Analytics";

// local imports
import style from "./aboutPage.module.css";

function AboutPage() {
  return (
    <div className={style.aboutPage}>
      <h2 className={style.title}>About TaskOrbit</h2>
      <p className={style.subtitle}>
        TaskOrbit helps you stay organized, boost your productivity, and achieve
        your goals with smart task management tools
      </p>
      <div className={style.cards}>
        <div className={style.card}>
          <h3 className="flex justify-center items-center">
            <span>
              <AssignmentIcon />
            </span>
            Task Management
          </h3>
          <p>Create, track, and organize your tasks easily in one place.</p>
        </div>

        <div className={style.card}>
          <h3 className="flex justify-center items-center">
            <span>
              <NotificationsActiveIcon />
            </span>
            Reminders
          </h3>
          <p>Never miss a deadline with smart reminders and alerts.</p>
        </div>

        <div className={style.card}>
          <h3 className="flex justify-center items-center">
            <span>
              <AnalyticsIcon />
            </span>
            Analytics
          </h3>
          <p>Track your progress and boost productivity with insights.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
