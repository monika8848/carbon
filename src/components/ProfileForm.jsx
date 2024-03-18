import { Button, Column, Grid, Row, TextInput } from "carbon-components-react";
import React from "react";

const ProfileForm = () => {
  return (
    <div style={{ marginLeft: "14rem", marginTop: "4rem" }}>
      <Grid>
        <Column lg={6} md={6} sm={6}>
          <div>
            <h4 className="profile_title">User Profile</h4>
            <form>
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="fullName">Full Name</label>
                {/* Increase input width by applying a style */}
                <TextInput
                  id="fullName"
                  name="fullName"
                  value="Neha"
                  style={{ width: "100%" }}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="fullName">Last Name</label>
                {/* Increase input width by applying a style */}
                <TextInput
                  id="lastName"
                  name="lastName"
                  value="Patel"
                  style={{ width: "100%" }}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="fullName">Role</label>
                {/* Increase input width by applying a style */}
                <TextInput
                  id="role"
                  name="role"
                  value="Developer"
                  style={{ width: "100%" }}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="fullName">Experience</label>
                {/* Increase input width by applying a style */}
                <TextInput
                  id="experience"
                  name="experience"
                  value="4"
                  style={{ width: "100%" }}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="address">Address</label>
                {/* Increase input width by applying a style */}
                <TextInput
                  id="address"
                  name="address"
                  value="Ghatkopar"
                  style={{ width: "100%" }}
                />
              </div>
              {/* Add other input fields as needed */}
              <Button type="submit" kind="primary">
                Submit
              </Button>
            </form>
          </div>
        </Column>
      </Grid>
    </div>
  );
};

export default ProfileForm;
