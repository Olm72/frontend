import React from "react";
import { useTranslation } from 'react-i18next';

const Dashboard = () => {
    const { t } = useTranslation();
    return (
        <div>
            <h1>{t("Dashboard")}</h1>
            <p>{t("welcome_dash")} </p>
        </div>
    );
};

export default Dashboard;
