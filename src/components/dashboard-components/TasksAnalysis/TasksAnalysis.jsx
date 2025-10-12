// local
import style from "../../../pages/dashboard-pages/dashboard-analysis/dashboardAnalysis.module.css"
import GeneralStatistics from "../General-statistics/generalStatistics";
import UserStatistics from "../user-statistics/userStatistics";

// ==================================================================================================================
function TasksAnalysis() {
    return ( 
        <>
            <div className={style.TasksAnalysisContent}>
                <GeneralStatistics />
                <UserStatistics/>
        </div>
        </>
    );
}

export default TasksAnalysis;