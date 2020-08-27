import React from 'react'
import {useDispatch} from 'react-redux'
import SidebarHome from './SidebarHome'
import SidebarSetting from './SidebarSetting'

const Sidebar = ({ activeMenuName, isActive, changeTheme, edges, nodes, propertyKeys, dbname, graph, role, database, metadata, getMetaData, addFrame, setQuery }) => {
    const dispatch = useDispatch();

    if (database.status === 'connected' && (metadata.status === 'init' || metadata.status === 'disconnected')) {
        dispatch(() => getMetaData())
    }

    return (
        <div id="sidebar" className={isActive ? " active " : ""} style={{overflowY: 'scroll'}}>
            <div className="tab-content">
                <div className={"tab-pane fade" + (activeMenuName === "home" ? " active show " : "") } role="tabpanel" aria-labelledby="side-home-tab">
                    <SidebarHome edges={edges} nodes={nodes} propertyKeys={propertyKeys} dbname={dbname} graph={graph} role={role} queryStr={setQuery} />
                </div>
                <div className={"tab-pane fade" + (activeMenuName === "setting" ? " active show " : "") } role="tabpanel" aria-labelledby="side-setting-tab">
                    <SidebarSetting changeTheme={changeTheme} />
                </div>
            </div>
        </div>
    );
}

export default Sidebar