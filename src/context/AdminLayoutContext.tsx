// Auto-Generated
import React, { createContext, useMemo, useState, useContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useWindowResize } from "../hooks/useWindowResize";

export const AdminLayoutContext = createContext(null);

export interface AdminLayoutProviderProps {
	sidebarExpanded?: boolean;
	sidebarBreakpoint?: number;
	children?: React.ReactNode;
}

const AdminLayoutProvider: React.FC<AdminLayoutProviderProps> = ({ sidebarExpanded = true, sidebarBreakpoint = 1140, children }) => {
	const { width } = useWindowResize(250);

	const [sidebarBreakpointState, setSidebarBreakpointState] = useState<number>(sidebarBreakpoint);
	const [storedSidebarState, setStoredSidebarState] = useLocalStorage("dui__admin__sidebar", sidebarExpanded);
	const [sidebarState, setSidebarState] = useState<boolean>(() =>
		width > sidebarBreakpointState ? storedSidebarState ?? sidebarExpanded : false
	);
	const [sidebarTemporaryState, setSidebarTemporaryState] = useState<boolean>(false);

	const toggleSidebar = () => {
		if (!sidebarState) {
			setSidebarTemporaryState(false);
		}
		setSidebarState((prev) => !prev);
		if (width >= sidebarBreakpointState) {
			setStoredSidebarState((prev: boolean) => !prev);
		}
	};

	const sidebarBreakpointValue = useMemo(() => ({ sidebarBreakpointState, setSidebarBreakpointState }), [
		sidebarBreakpointState,
		setSidebarBreakpointState,
	]);
	const storedSidebarValue = useMemo(() => ({ storedSidebarState, setStoredSidebarState }), [storedSidebarState, setStoredSidebarState]);
	const sidebarValue = useMemo(() => ({ sidebarState, setSidebarState }), [sidebarState, setSidebarState]);
	const sidebarTemporaryValue = useMemo(() => ({ sidebarTemporaryState, setSidebarTemporaryState }), [
		sidebarTemporaryState,
		setSidebarTemporaryState,
	]);

	useEffect(() => {
		if (width >= sidebarBreakpointState) {
			setSidebarState(storedSidebarState);
		} else {
			setSidebarState(false);
		}
	}, [width, sidebarBreakpointState]);

	return (
		<AdminLayoutContext.Provider
			value={{
				sidebarBreakpointValue,
				storedSidebarValue,
				sidebarValue,
				sidebarTemporaryValue,
				toggleSidebar,
			}}>
			{children}
		</AdminLayoutContext.Provider>
	);
};

export const useAdminLayout = () => {
	const context = useContext(AdminLayoutContext);

	if (context === undefined) {
		throw new Error("useAdminLayout must be used within a AdminLayoutContextProvider");
	}

	return context;
};

export default AdminLayoutProvider;
