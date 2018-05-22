import * as React from "react";
import { Grid, Button } from "@material-ui/core";

import RegularCard from "../../components/Cards/RegularCard";
import ItemGrid from "../../components/Grid/ItemGrid";
import CustomInput from "../../components/CustomInput/CustomInput";

const Entry = (props: {}) => {
    return (
        <div>
            <Grid container={true}>
                <ItemGrid xs={12} sm={12} md={8}>
                    <RegularCard
                        headerColor="purple"
                        plainCard={true}
                        cardTitle="申し込みページ"
                        cardSubtitle="Oizumi CUP"
                        content={
                            <div>
                                <Grid container={true}>
                                    <ItemGrid xs={12} sm={4}>
                                        <CustomInput
                                            labelText="チーム名"
                                            id="teamName"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            error={false}
                                            success={false}
                                            inputProps=""
                                            labelProps=""
                                        />
                                    </ItemGrid>
                                    <ItemGrid xs={12} sm={4}>
                                        <CustomInput
                                            labelText="代表名"
                                            id="leaderName"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            error={false}
                                            success={false}
                                            inputProps=""
                                            labelProps=""
                                        />
                                    </ItemGrid>
                                    <ItemGrid xs={12} sm={4}>
                                        <CustomInput
                                            labelText="メールアドレス"
                                            id="email"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            error={false}
                                            success={false}
                                            inputProps=""
                                            labelProps=""
                                        />
                                    </ItemGrid>
                                    <ItemGrid xs={12} sm={4}>
                                        <CustomInput
                                            labelText="電話番号"
                                            id="phoneNo"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            error={false}
                                            success={false}
                                            inputProps=""
                                            labelProps=""
                                        />
                                    </ItemGrid>
                                </Grid>
                            </div>
                        }
                        footer={<Button variant="raised" style={{ background: "linear-gradient(60deg, #ab47bc, #8e24aa)", color: "#FFF" }}>申し込む</Button>}
                    />
                </ItemGrid>
            </Grid>
        </div>
    );
}

export default Entry;
