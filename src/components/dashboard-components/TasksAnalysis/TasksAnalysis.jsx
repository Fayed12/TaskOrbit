// local
import style from "../../../pages/dashboard-pages/dashboard-analysis/dashboardAnalysis.module.css"
import GeneralStatistics from "../General-statistics/generalStatistics";

// ==================================================================================================================
function TasksAnalysis() {
    return ( 
        <>
            <div className={style.TasksAnalysisContent}>
                <GeneralStatistics/>
        </div>
        </>
    );
}

export default TasksAnalysis;