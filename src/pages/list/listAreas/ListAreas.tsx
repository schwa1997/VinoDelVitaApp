import { useEffect, useState } from 'react';
import { Form, Select } from 'antd';

import { getAreas } from '@/server/api/apis';

import { AreaType } from '@/type';

import AreaMap from '../../../components/map/DisplayAreaMap';

import NotFoundPage from '../../../components/pages/components/404';

const ListAreas = () => {
    const role = localStorage.getItem('role');
    const [area, setArea] = useState<AreaType>(); // Initialize 'area' with null
    const [areas, setAreas] = useState<AreaType[]>();
    const [loading, setLoading] = useState(true); // Add loading state

    const handleAreaChange = (value: string) => {
        const selectedArea = areas?.find((item) => item.id === value);
        setArea(selectedArea);
        console.log('selectedArea', selectedArea);
    };

    useEffect(() => {
        getAreas()
            .then((res) => {
                setAreas(res);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        // Add loading state handling, you can show a spinner or loading message
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="tw-h-full">
                {role === 'admin' || role === 'agronomists' ? (
                    <NotFoundPage />
                ) : (
                    <>
                        <div>
                            {area && (
                                <AreaMap
                                    vineyards={area.vineyards}
                                    id={area.id}
                                    name={area.name}
                                    code={area.code}
                                    geometry={area.geometry}
                                />
                            )}
                            <div className="tw-flex tw-flex-col tw-fixed tw-top-32 tw-left-4 tw-gap-6">
                                <Form className="tw-flex-auto tw-bg-violet-300/70 hover:tw-bg-violet-300 tw-p-4 tw-rounded-md tw-shadow-md">
                                    <Form.Item
                                        name="Select Area"
                                        label="Select Area By Code"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Select something!',
                                            },
                                        ]}
                                    >
                                        <Select onChange={handleAreaChange}>
                                            {areas?.map((item) => (
                                                <Select.Option key={item.id} value={item.id}>
                                                    {item.code}
                                                </Select.Option>
                                            ))}
                                        </Select>
                                    </Form.Item>
                                    <p className="tw-font-bold">Vineyards:</p>
                                    <ul className="tw-list-disc">
                                        {area &&
                                            area.vineyards &&
                                            area.vineyards.map((item) => (
                                                <li key={item.id}>{item.name}</li>
                                            ))}
                                    </ul>
                                </Form>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default ListAreas;
