
function query(constants0) {
  {
    let ret0;
    {
      let env;
      {
        ;
        env = {
          };;
        {
          let id;
          {
            ;
            id = null;;
            {
              let stratify0;
              {
                ;
                {
                  let tmp0 = distinct(array());
                  {
                    ;
                    iterColl(recDot(constants0, "R"), (function (tmap$0) {
                                                {
                          let tappe$0;
                          {
                            ;
                            tappe$0 = recConcat({
                                  "tl": (env)
                                }, {
                                  "slc": (array(tmap$0))
                                });;
                            {
                              let stratify0$0;
                              {
                                ;
                                {
                                  let tapp$0;
                                  {
                                    ;
                                    tapp$0 = nth(recDot(tappe$0, "slc"), {
                                          "$nat": (0.0)
                                        });;
                                    if (either(tapp$0)) {
                                      {
                                        let teitherL$0 = getLeft(tapp$0);
                                        stratify0$0 = teitherL$0;
                                      }
                                    } else {
                                      {
                                        let teitherR$0 = getRight(tapp$0);
                                        stratify0$0 = {
                                            "R.A": ({
                                              "$right": ({
                                                "$nat": (0.0)
                                              })
                                            })
                                          };
                                      }
                                    }
                                  }
                                };
                                tmp0 = union(tmp0, array(recConcat({
                                          "_c0.A": (recDot(stratify0$0, "R.A"))
                                        }, {
                                        })));
                              }
                            }
                          }
                        }
                      }));;
                    stratify0 = tmp0;
                  }
                };
                {
                  let stratify1;
                  {
                    ;
                    {
                      let tmp0 = distinct(array());
                      {
                        ;
                        iterColl(stratify0, (function (tsel$0) {
                                                        {
                              let stratify0$3;
                              {
                                ;
                                {
                                  let tappe$0;
                                  {
                                    ;
                                    tappe$0 = recConcat({
                                          "tl": (env)
                                        }, {
                                          "slc": (array(tsel$0))
                                        });;
                                    {
                                      let tapp$0;
                                      {
                                        ;
                                        {
                                          let tapp$7;
                                          {
                                            ;
                                            {
                                              let stratify0$2;
                                              {
                                                ;
                                                {
                                                  let tmp1 = distinct(array());
                                                  {
                                                    ;
                                                    iterColl(recDot(constants0, "S"), (function (tmap$0) {
                                                                                                                {
                                                          let tappe$1;
                                                          {
                                                            ;
                                                            tappe$1 = recConcat({
                                                                  "tl": (tappe$0)
                                                                }, {
                                                                  "slc": (array(tmap$0))
                                                                });;
                                                            {
                                                              let stratify0$0;
                                                              {
                                                                ;
                                                                {
                                                                  let tapp$1;
                                                                  {
                                                                    ;
                                                                    tapp$1 = nth(recDot(tappe$1, "slc"), {
                                                                          "$nat": (0.0)
                                                                        });;
                                                                    if (either(tapp$1)) {
                                                                      {
                                                                        let teitherL$0 = getLeft(tapp$1);
                                                                        stratify0$0 = teitherL$0;
                                                                      }
                                                                    } else {
                                                                      {
                                                                        let teitherR$0 = getRight(tapp$1);
                                                                        stratify0$0 = {
                                                                            "S.A": ({
                                                                              "$right": ({
                                                                                "$nat": (0.0)
                                                                              })
                                                                            })
                                                                          };
                                                                      }
                                                                    }
                                                                  }
                                                                };
                                                                tmp1 = union(tmp1, array(recConcat({
                                                                          "_c1.A": (recDot(stratify0$0, "S.A"))
                                                                        }, {
                                                                        })));
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }));;
                                                    stratify0$2 = tmp1;
                                                  }
                                                };
                                                {
                                                  let stratify1$2;
                                                  {
                                                    ;
                                                    {
                                                      let tmp1 = distinct(array());
                                                      {
                                                        ;
                                                        iterColl(stratify0$2, (function (tsel$1) {
                                                                                                                        {
                                                              let stratify0$1;
                                                              {
                                                                ;
                                                                {
                                                                  let tappe$1;
                                                                  {
                                                                    ;
                                                                    tappe$1 = recConcat({
                                                                          "tl": (tappe$0)
                                                                        }, {
                                                                          "slc": (array(tsel$1))
                                                                        });;
                                                                    {
                                                                      let tapp$6;
                                                                      {
                                                                        ;
                                                                        {
                                                                          let tappe$3;
                                                                          {
                                                                            ;
                                                                            {
                                                                              let stratify0$0;
                                                                              {
                                                                                ;
                                                                                {
                                                                                  let tapp$1;
                                                                                  {
                                                                                    ;
                                                                                    tapp$1 = nth(recDot(tappe$1, "slc"), {
                                                                                          "$nat": (0.0)
                                                                                        });;
                                                                                    if (either(tapp$1)) {
                                                                                      {
                                                                                        let teitherL$0 = getLeft(tapp$1);
                                                                                        stratify0$0 = teitherL$0;
                                                                                      }
                                                                                    } else {
                                                                                      {
                                                                                        let teitherR$0 = getRight(tapp$1);
                                                                                        stratify0$0 = {
                                                                                            "_c1.A": ({
                                                                                              "$right": ({
                                                                                                "$nat": (0.0)
                                                                                              })
                                                                                            })
                                                                                          };
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                };
                                                                                {
                                                                                  let stratify1$1;
                                                                                  {
                                                                                    ;
                                                                                    {
                                                                                      let tappe$2;
                                                                                      {
                                                                                        ;
                                                                                        tappe$2 = recDot(tappe$1, "tl");;
                                                                                        {
                                                                                          let stratify1$0;
                                                                                          {
                                                                                            ;
                                                                                            {
                                                                                              let tapp$1;
                                                                                              {
                                                                                                ;
                                                                                                tapp$1 = nth(recDot(tappe$2, "slc"), {
                                                                                                      "$nat": (0.0)
                                                                                                    });;
                                                                                                if (either(tapp$1)) {
                                                                                                  {
                                                                                                    let teitherL$0 = getLeft(tapp$1);
                                                                                                    stratify1$0 = teitherL$0;
                                                                                                  }
                                                                                                } else {
                                                                                                  {
                                                                                                    let teitherR$0 = getRight(tapp$1);
                                                                                                    stratify1$0 = {
                                                                                                        "_c0.A": ({
                                                                                                          "$right": ({
                                                                                                            "$nat": (0.0)
                                                                                                          })
                                                                                                        })
                                                                                                      };
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            };
                                                                                            stratify1$1 = recDot(stratify1$0, "_c0.A");
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    };
                                                                                    tappe$3 = recConcat({
                                                                                          "a#": (recDot(stratify0$0, "_c1.A"))
                                                                                        }, {
                                                                                          "b#": (stratify1$1)
                                                                                        });
                                                                                  }
                                                                                }
                                                                              }
                                                                            };
                                                                            {
                                                                              let tapp$5;
                                                                              {
                                                                                ;
                                                                                tapp$5 = recDot(tappe$3, "a#");;
                                                                                if (either(tapp$5)) {
                                                                                  {
                                                                                    let teitherL$0 = getLeft(tapp$5);
                                                                                    {
                                                                                      let tapp$4;
                                                                                      {
                                                                                        ;
                                                                                        tapp$4 = {
                                                                                            "$left": (teitherL$0)
                                                                                          };;
                                                                                        {
                                                                                          let tapp$1;
                                                                                          {
                                                                                            ;
                                                                                            tapp$1 = recDot(tappe$3, "b#");;
                                                                                            if (either(tapp$1)) {
                                                                                              {
                                                                                                let teitherL$0 = getLeft(tapp$1);
                                                                                                {
                                                                                                  let tapp$3;
                                                                                                  {
                                                                                                    ;
                                                                                                    tapp$3 = {
                                                                                                        "$left": (teitherL$0)
                                                                                                      };;
                                                                                                    {
                                                                                                      let stratify0$0;
                                                                                                      {
                                                                                                        ;
                                                                                                        {
                                                                                                          let tapp$2;
                                                                                                          {
                                                                                                            ;
                                                                                                            tapp$2 = recDot(tappe$3, "a#");;
                                                                                                            if (either(tapp$2)) {
                                                                                                              {
                                                                                                                let teitherL$0 = getLeft(tapp$2);
                                                                                                                stratify0$0 = teitherL$0;
                                                                                                              }
                                                                                                            } else {
                                                                                                              {
                                                                                                                let teitherR$0 = getRight(tapp$2);
                                                                                                                stratify0$0 = teitherR$0;
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        };
                                                                                                        {
                                                                                                          let stratify1$0;
                                                                                                          {
                                                                                                            ;
                                                                                                            {
                                                                                                              let tapp$2;
                                                                                                              {
                                                                                                                ;
                                                                                                                tapp$2 = recDot(tappe$3, "b#");;
                                                                                                                if (either(tapp$2)) {
                                                                                                                  {
                                                                                                                    let teitherL$0 = getLeft(tapp$2);
                                                                                                                    stratify1$0 = teitherL$0;
                                                                                                                  }
                                                                                                                } else {
                                                                                                                  {
                                                                                                                    let teitherR$0 = getRight(tapp$2);
                                                                                                                    stratify1$0 = teitherR$0;
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            };
                                                                                                            tapp$6 = {
                                                                                                                "$left": (equal(stratify0$0, stratify1$0))
                                                                                                              };
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            } else {
                                                                                              {
                                                                                                let teitherR$0 = getRight(tapp$1);
                                                                                                tapp$6 = {
                                                                                                    "$right": (null)
                                                                                                  };
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                } else {
                                                                                  {
                                                                                    let teitherR$0 = getRight(tapp$5);
                                                                                    tapp$6 = {
                                                                                        "$right": (null)
                                                                                      };
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        };
                                                                        if (either(tapp$6)) {
                                                                          {
                                                                            let teitherL$0 = getLeft(tapp$6);
                                                                            stratify0$1 = teitherL$0;
                                                                          }
                                                                        } else {
                                                                          {
                                                                            let teitherR$0 = getRight(tapp$6);
                                                                            stratify0$1 = false;
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                };
                                                                if (stratify0$1) {
                                                                  tmp1 = union(tmp1, array(array(tsel$1)));
                                                                } else {
                                                                  tmp1 = union(tmp1, array(array()));
                                                                }
                                                              }
                                                            }
                                                          }));;
                                                        stratify1$2 = tmp1;
                                                      }
                                                    };
                                                    tapp$7 = {
                                                        "$left": ((!natLe(count(flatten(stratify1$2)), {
                                                              "$nat": (0.0)
                                                            })))
                                                      };
                                                  }
                                                }
                                              }
                                            };
                                            if (either(tapp$7)) {
                                              {
                                                let teitherL$0 = getLeft(tapp$7);
                                                tapp$0 = {
                                                    "$left": ((!teitherL$0))
                                                  };
                                              }
                                            } else {
                                              {
                                                let teitherR$0 = getRight(tapp$7);
                                                tapp$0 = {
                                                    "$right": (null)
                                                  };
                                              }
                                            }
                                          }
                                        };
                                        if (either(tapp$0)) {
                                          {
                                            let teitherL$0 = getLeft(tapp$0);
                                            stratify0$3 = teitherL$0;
                                          }
                                        } else {
                                          {
                                            let teitherR$0 = getRight(tapp$0);
                                            stratify0$3 = false;
                                          }
                                        }
                                      }
                                    }
                                  }
                                };
                                if (stratify0$3) {
                                  tmp0 = union(tmp0, array(array(tsel$0)));
                                } else {
                                  tmp0 = union(tmp0, array(array()));
                                }
                              }
                            }
                          }));;
                        stratify1 = tmp0;
                      }
                    };
                    {
                      let tmp0 = distinct(array());
                      {
                        ;
                        iterColl(flatten(stratify1), (function (tmap$0) {
                                                        {
                              let tappe$0;
                              {
                                ;
                                tappe$0 = recConcat({
                                      "tl": (env)
                                    }, {
                                      "slc": (array(tmap$0))
                                    });;
                                {
                                  let stratify0$0;
                                  {
                                    ;
                                    {
                                      let tapp$0;
                                      {
                                        ;
                                        tapp$0 = nth(recDot(tappe$0, "slc"), {
                                              "$nat": (0.0)
                                            });;
                                        if (either(tapp$0)) {
                                          {
                                            let teitherL$0 = getLeft(tapp$0);
                                            stratify0$0 = teitherL$0;
                                          }
                                        } else {
                                          {
                                            let teitherR$0 = getRight(tapp$0);
                                            stratify0$0 = {
                                                "_c0.A": ({
                                                  "$right": ({
                                                    "$nat": (0.0)
                                                  })
                                                })
                                              };
                                          }
                                        }
                                      }
                                    };
                                    tmp0 = union(tmp0, array(recConcat({
                                              "_c0_A": (recDot(stratify0$0, "_c0.A"))
                                            }, {
                                            })));
                                  }
                                }
                              }
                            }
                          }));;
                        ret0 = tmp0;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    };
    return ret0;
  }
}module.exports = { query };
