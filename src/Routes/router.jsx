import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import FlashbackFlow from "../Pages/FlashbackAI/FlashbackOnboarding";
import FlashbackOnboarding from "../Pages/FlashbackAI/FlashbackOnboarding";
import { Step5_Login } from "../Pages/FlashbackAI/Step5_Login";
import { Step_PreviewReady } from "../Pages/FlashbackAI/Step_PreviewReady";
import PricingPage from "../Pages/Pricing/PricingPage";
import LoginPage from "../Pages/Authentication/SignIn";
import Dashboard from "../Pages/Dashboard/Dashboard";
import { GetCoinsPage } from "../Pages/Dashboard/GetCoinsPage";
import { DashboardLayout } from "../Pages/Dashboard/DashboardLayout";
import { DashboardHome } from "../Pages/Dashboard/DashboardHome";
import { InviteFriendsPage } from "../Pages/Dashboard/InviteFriendsPage";
import { MomentsGallery } from "../Pages/Dashboard/MomentsGallery";
import { ProfileSettingsPage } from "../Pages/Dashboard/ProfileSettingsPage";
import GetCoinPage2 from "../Pages/Dashboard/GetCoinPage2";
import Questions from "../Pages/Dashboard/Survey/Questions";
import ThankYouPage from "../Pages/Dashboard/Survey/Thankyou";
import UpsalePage from "../Pages/Pricing/UpsalePage";
import BestDeal from "../Pages/Pricing/BestDeal";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/flashback",
    element: <FlashbackOnboarding />,
  },
  {
    path: "/step-login",
    element: <Step5_Login />,
  },
  {
    path: "/step-preview",
    element: <Step_PreviewReady />,
  },
  {
    path: "/pricing",
    element: <PricingPage />,
  },
  {
    path: "/upsale",
    element: <UpsalePage />,
  },
  {
    path: "/best-deal",
    element: <BestDeal />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "get-coins",
        element: <GetCoinsPage />,
      },
      {
        path: "got-coins",
        element: <GetCoinPage2 />,
      },
      {
        path: "invite",
        element: <InviteFriendsPage />,
      },
      {
        path: "moments",
        element: <MomentsGallery />,
      },
      {
        path: "survey",
        element: <Questions />,
      },
      {
        path: "thankyou",
        element: <ThankYouPage />,
      },
      {
        path: "settings",
        element: <ProfileSettingsPage />,
      },
    ],
  },
]);
