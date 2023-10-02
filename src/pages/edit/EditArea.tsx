import EditAreaMap from '../../components/map/EditAreaMap';

import NotFoundPage from '../../components/pages/components/404';

const EditArea = () => {
    const role = localStorage.getItem('role');
    return (
        <>
            {role === 'admin' || role === 'agronomists' ? (
                <NotFoundPage />
            ) : (
                <div id="form" className="tw-overflow-y-scroll">
                    <EditAreaMap />
                </div>
            )}
        </>
    );
};
export default EditArea;
